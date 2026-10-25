import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";
const M={".html":"text/html",".js":"application/javascript",".json":"application/json",".png":"image/png",".ico":"image/x-icon",".svg":"image/svg+xml"};
const srv=createServer(async(q,r)=>{try{const u=q.url.split("?")[0];const p=join(process.cwd(),u==="/"?"index.html":u.slice(1));r.writeHead(200,{"Content-Type":M[extname(p)]||"application/octet-stream"});r.end(await readFile(p));}catch{r.writeHead(404);r.end();}});
await new Promise(r=>srv.listen(0,"127.0.0.1",r));
const b=await chromium.launch({args:["--autoplay-policy=no-user-gesture-required"]});
const ctx=await b.newContext({viewport:{width:390,height:844}});
const pg=await ctx.newPage();
// Tap everything that reaches the speakers, so output can be measured.
await pg.addInitScript(() => {
  const Real = window.AudioContext;
  window.__probe = { peak: 0, rms: 0, samples: 0 };
  window.AudioContext = class extends Real {
    constructor(...a) {
      super(...a);
      const an = this.createAnalyser();
      an.fftSize = 4096;
      window.__an = an;
      const realConnect = AudioNode.prototype.connect;
      const self = this;
      AudioNode.prototype.connect = function (dest, ...rest) {
        const r = realConnect.call(this, dest, ...rest);
        if (dest === self.destination) { try { realConnect.call(this, an); } catch {} }
        return r;
      };
    }
  };
});
await pg.goto(`http://127.0.0.1:${srv.address().port}/`,{waitUntil:"networkidle"});
const measure = async (ms=1200) => pg.evaluate((ms) => new Promise((res) => {
  const an = window.__an; if (!an) return res({ err: "no analyser" });
  const buf = new Float32Array(an.fftSize);
  let peak = 0, sum = 0, n = 0;
  const t0 = performance.now();
  const tick = () => {
    an.getFloatTimeDomainData(buf);
    for (let i = 0; i < buf.length; i++) { const v = Math.abs(buf[i]); if (v > peak) peak = v; sum += v * v; n++; }
    if (performance.now() - t0 < ms) requestAnimationFrame(tick);
    else {
      const f = new Float32Array(an.frequencyBinCount);
      an.getFloatFrequencyData(f);
      const hz = (window.__sampleRate || 44100) / an.fftSize;
      const peaks = [];
      for (let i = 2; i < f.length - 1; i++) {
        if (f[i] > f[i-1] && f[i] > f[i+1] && f[i] > -70) peaks.push([Math.round(i*hz), +f[i].toFixed(1)]);
      }
      peaks.sort((a,b)=>b[1]-a[1]);
      res({ peak: +peak.toFixed(4), rms: +Math.sqrt(sum/n).toFixed(4), peaks: peaks.slice(0,6) });
    }
  };
  requestAnimationFrame(tick);
}), ms);

await pg.waitForTimeout(500);
console.log("before any tap:", JSON.stringify(await measure(600)));
await pg.mouse.click(195, 300);          // the gesture
await pg.waitForTimeout(1800);
console.log("after gesture (cozy bed):", JSON.stringify(await measure(1500)));
await pg.getByRole("tab",{name:"settings"}).click();
await pg.waitForTimeout(500);
await pg.locator(".snd-ping").click();
await pg.waitForTimeout(120);
console.log("during test chime:", JSON.stringify(await measure(700)));
await pg.locator(".snd-scenes button", { hasText: "off" }).click();
await pg.waitForTimeout(1500);
console.log("after picking off:", JSON.stringify(await measure(900)));
await b.close(); srv.close();
