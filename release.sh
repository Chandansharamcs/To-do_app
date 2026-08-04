#!/usr/bin/env bash
#
#   tasks.sh release script
#
#   Usage:
#       ./release.sh 22                 copy v22 from the archive, verify, commit, push
#       ./release.sh 22 --worker        ...and deploy the Cloudflare worker too
#       ./release.sh 22 --dry-run       show what would happen, change nothing
#       ./release.sh --help
#
#   Why this exists: the manual copy/commit/push dance has failed several
#   times in ways that were silent rather than loud --
#     * a long pasted command truncated mid-string, leaving bash at a `>`
#       prompt swallowing everything typed after it (including a secret)
#     * a `sed` that matched nothing exited 0, so a "fix" shipped unchanged
#     * files copied into the repo while `wrangler deploy` shipped stale code
#   Every one of those is a verification failure, so this script's real job
#   is not convenience -- it's refusing to continue when something is off.
#
set -euo pipefail

# ---------------------------------------------------------------- settings --
REPO="${TASKSH_REPO:-$HOME/To-do_app}"
ARCHIVE="${TASKSH_ARCHIVE:-$HOME/Downloads}"
BRANCH="${TASKSH_BRANCH:-main}"

# ------------------------------------------------------------------ colours --
if [ -t 1 ]; then
  R=$'\e[31m'; G=$'\e[32m'; Y=$'\e[33m'; C=$'\e[36m'; B=$'\e[1m'; X=$'\e[0m'
else
  R=""; G=""; Y=""; C=""; B=""; X=""
fi

ok()   { printf '%s  ✓%s %s\n' "$G" "$X" "$1"; }
info() { printf '%s  ·%s %s\n' "$C" "$X" "$1"; }
warn() { printf '%s  !%s %s\n' "$Y" "$X" "$1"; }
die()  { printf '\n%s  ✗ %s%s\n\n' "$R" "$1" "$X" >&2; exit 1; }
step() { printf '\n%s%s%s\n' "$B" "$1" "$X"; }

usage() {
  cat <<'EOF'
tasks.sh release

  ./release.sh <version> [options]

  <version>     version number, digits only.  e.g.  22   (for tasksh-v22)

Options
  --worker      also run `wrangler deploy` after pushing
  --dry-run     print every action, modify nothing
  --no-push     commit locally but don't push
  --from DIR    source folder (default: ~/Downloads/v<version>)
  --help

Environment
  TASKSH_REPO      repo path      (default ~/To-do_app)
  TASKSH_ARCHIVE   archive root   (default ~/Downloads)
  TASKSH_BRANCH    branch         (default main)

Examples
  ./release.sh 22
  ./release.sh 22 --worker
  ./release.sh 22 --dry-run
EOF
}

# --------------------------------------------------------------- arg parse --
VERSION=""; DO_WORKER=0; DRY=0; DO_PUSH=1; SRC_OVERRIDE=""

while [ $# -gt 0 ]; do
  case "$1" in
    --help|-h) usage; exit 0 ;;
    --worker)  DO_WORKER=1 ;;
    --dry-run) DRY=1 ;;
    --no-push) DO_PUSH=0 ;;
    --from)    shift; SRC_OVERRIDE="${1:-}" ;;
    -*)        die "unknown option: $1" ;;
    *)         [ -z "$VERSION" ] && VERSION="$1" || die "unexpected argument: $1" ;;
  esac
  shift
done

[ -z "$VERSION" ] && { usage; exit 1; }
[[ "$VERSION" =~ ^[0-9]+$ ]] || die "version must be digits only, got: $VERSION"

TAG="tasksh-v${VERSION}"
SRC="${SRC_OVERRIDE:-$ARCHIVE/v$VERSION}"

run() {
  if [ "$DRY" -eq 1 ]; then printf '      %s$ %s%s\n' "$C" "$*" "$X"; else "$@"; fi
}

printf '\n%s┌─ tasks.sh release %s ─────────────────────────%s\n' "$B" "$TAG" "$X"
[ "$DRY" -eq 1 ] && warn "DRY RUN — nothing will be modified"
info "source: $SRC"
info "repo:   $REPO"

# ------------------------------------------------------- 1. sanity checks --
step "1 · checks"

[ -d "$SRC" ]  || die "source folder not found: $SRC
    Did you download and unzip the release?
      cd ~/Downloads && unzip -o tasksh-v${VERSION}.zip"
[ -d "$REPO" ] || die "repo not found: $REPO   (set TASKSH_REPO to override)"

cd "$REPO"
git rev-parse --git-dir >/dev/null 2>&1 || die "$REPO is not a git repository"
ok "repo is a git checkout"

CUR_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
[ "$CUR_BRANCH" = "$BRANCH" ] || warn "on branch '$CUR_BRANCH', expected '$BRANCH'"

# Uncommitted work would get swept into this release's commit by `git add -A`.
if [ -n "$(git status --porcelain)" ]; then
  warn "working tree already has changes:"
  git status --short | sed 's/^/        /'
  if [ "$DRY" -eq 0 ]; then
    printf '\n    Continue and include these in the release commit? [y/N] '
    read -r reply </dev/tty
    [[ "$reply" =~ ^[Yy]$ ]] || die "aborted — commit or stash them first"
  fi
fi

# The source must actually contain a release, not an empty/wrong folder.
[ -f "$SRC/sw.js" ] || die "no sw.js in $SRC — is that the right folder?"

SRC_TAG="$(grep -o 'tasksh-v[0-9]\+' "$SRC/sw.js" | head -1 || true)"
[ -n "$SRC_TAG" ] || die "couldn't find a cache tag in $SRC/sw.js"
[ "$SRC_TAG" = "$TAG" ] || die "version mismatch:
    you asked for  $TAG
    but $SRC/sw.js contains  $SRC_TAG
    Re-run as:  ./release.sh ${SRC_TAG#tasksh-v}"
ok "source cache tag is $SRC_TAG"

OLD_TAG="$(grep -o 'tasksh-v[0-9]\+' sw.js | head -1 || echo none)"
[ "$OLD_TAG" != "$TAG" ] || warn "repo is already on $TAG — nothing may change"
info "cache tag: $OLD_TAG → $TAG"

# ------------------------------------------------------------- 2. copying --
step "2 · copying files"

copied=0
copy_one() {   # copy_one <relative path>
  local rel="$1"
  [ -f "$SRC/$rel" ] || return 0
  run mkdir -p "$(dirname "$REPO/$rel")"
  run cp "$SRC/$rel" "$REPO/$rel"
  printf '      %s\n' "$rel"
  copied=$((copied + 1))
}

for f in app.jsx bundle.js sw.js index.html manifest.json package.json; do
  copy_one "$f"
done
for f in "$SRC"/*.md;   do [ -e "$f" ] && copy_one "$(basename "$f")"; done
for f in "$SRC"/*.png;  do [ -e "$f" ] && copy_one "$(basename "$f")"; done
[ -f "$SRC/favicon.ico" ]   && copy_one "favicon.ico"
[ -f "$SRC/gitignore.txt" ] && { run cp "$SRC/gitignore.txt" "$REPO/.gitignore"; printf '      .gitignore\n'; copied=$((copied+1)); }
copy_one "worker/src/index.js"
copy_one "worker/README.md"
copy_one "worker/wrangler.toml"

# Test suites. Added in v30, when `npm test` was found to reference five files
# that had never been committed on any branch -- a clean clone could not run a
# single test. Copying them is the whole point of that fix, so a release that
# silently dropped them would undo it.
for f in "$SRC"/*.test.mjs; do [ -e "$f" ] && copy_one "$(basename "$f")"; done
for f in "$SRC"/*.spec.mjs; do [ -e "$f" ] && copy_one "$(basename "$f")"; done
copy_one "worker/providers.test.mjs"
copy_one "worker/callshape.test.mjs"
copy_one "package-lock.json"

[ "$copied" -gt 0 ] || die "nothing was copied — is $SRC empty?"
ok "$copied file(s) copied"

# ------------------------------------------------------- 3. verify it took --
# This is the step that would have caught the silent `sed` no-op: never trust
# that a copy/edit landed, always re-read the file afterwards.
step "3 · verifying"

if [ "$DRY" -eq 0 ]; then
  NOW_TAG="$(grep -o 'tasksh-v[0-9]\+' sw.js | head -1 || echo none)"
  [ "$NOW_TAG" = "$TAG" ] || die "sw.js still reads $NOW_TAG after copying — the copy didn't take"
  ok "sw.js in repo now reads $TAG"

  if [ -f bundle.js ] && [ -f "$SRC/bundle.js" ]; then
    cmp -s bundle.js "$SRC/bundle.js" && ok "bundle.js matches source" \
      || die "bundle.js differs from source after copying"
  fi

  if [ -f app.jsx ] && ! grep -q 'YOUR-SUBDOMAIN' app.jsx; then
    ok "no placeholder worker URL left in app.jsx"
  elif [ -f app.jsx ]; then
    warn "app.jsx still contains the YOUR-SUBDOMAIN placeholder"
  fi
else
  info "(skipped in dry run)"
fi

# ------------------------------------------------------- 4. secret sweep ---
# A credential was nearly committed once when a truncated paste swallowed the
# following keystrokes. Cheap to check, expensive to miss.
step "4 · secret scan"

if [ "$DRY" -eq 0 ]; then
  run git add -A
  LEAKS="$(git diff --cached -- . ':(exclude)*.md' \
           | grep -nE 'AIza[0-9A-Za-z_-]{30,}|AQ\.[0-9A-Za-z_-]{20,}|BEGIN [A-Z ]*PRIVATE KEY' \
           || true)"
  if [ -n "$LEAKS" ]; then
    printf '\n%s' "$R"
    printf '%s\n' "$LEAKS" | head -5 | sed 's/^/        /'
    printf '%s' "$X"
    die "possible credential in staged changes — unstage and remove it
    (run: git reset)"
  fi
  ok "no obvious credentials staged"
else
  info "(skipped in dry run)"
fi

# ------------------------------------------------------------ 5. commit ----
step "5 · commit"

if [ "$DRY" -eq 1 ]; then
  info "would commit as: Release v$VERSION"
elif git diff --cached --quiet; then
  warn "nothing staged — repo already matches the source, skipping commit"
else
  git diff --cached --stat | tail -n +1 | sed 's/^/      /'
  # Short, comma-free message on purpose: long pasted messages have been
  # truncated by the terminal mid-string, leaving an unterminated quote.
  git commit -q -m "Release v$VERSION"
  ok "committed: Release v$VERSION"
fi

# -------------------------------------------------------------- 6. push ----
step "6 · push"

if [ "$DRY" -eq 1 ]; then
  info "would push to origin/$BRANCH"
elif [ "$DO_PUSH" -eq 0 ]; then
  warn "skipped (--no-push)"
else
  git push -q origin "$BRANCH"
  ok "pushed to origin/$BRANCH"
fi

# ------------------------------------------------------------ 7. worker ----
if [ "$DO_WORKER" -eq 1 ]; then
  step "7 · worker deploy"
  if [ ! -d "$REPO/worker" ]; then
    warn "no worker/ directory, skipping"
  elif [ "$DRY" -eq 1 ]; then
    info "would run: cd worker && npx wrangler deploy"
  else
    ( cd "$REPO/worker" && npx wrangler deploy )
    ok "worker deployed"
  fi
else
  if [ -f "$SRC/worker/src/index.js" ] && [ "$DRY" -eq 0 ]; then
    printf '\n'
    warn "worker/src/index.js changed but was NOT deployed."
    warn "GitHub Pages and Cloudflare are separate targets — run:"
    printf '        cd %s/worker && npx wrangler deploy\n' "$REPO"
    warn "or re-run this script with --worker"
  fi
fi

# ------------------------------------------------------------- summary -----
printf '\n%s└─ %s done%s\n' "$B" "$TAG" "$X"
if [ "$DRY" -eq 0 ]; then
  cat <<EOF

  On your phone, to pick up the new cache:
    export your data → remove from home screen → clear site data
    → revisit → reinstall → import backup

EOF
fi
