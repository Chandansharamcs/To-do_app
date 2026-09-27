// daily.test.mjs
//
// The daily quest board: which day it belongs to, and what gets drawn.
//
// The day boundary is the interesting part. The board rolls at the user's
// FIRST ROUTINE, not midnight -- their first routine is 05:30, so anything
// finished between midnight and 05:30 still belongs to the day they were
// awake for. Getting that wrong silently wipes a completed board.

import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const here = dirname(fileURLToPath(import.meta.url));
const SRC = readFileSync(join(here, "app.jsx"), "utf8");
function slice(n){
  const m=SRC.match(new RegExp("^function "+n+"\\(","m"));
  let i=SRC.indexOf("(",m.index),d=0;
  for(;i<SRC.length;i++){if(SRC[i]==="(")d++;else if(SRC[i]===")"){d--;if(d===0){i++;break;}}}
  let dep=0,seen=false,st=null,l=false,b=false;
  for(;i<SRC.length;i++){const c=SRC[i],p=SRC[i-1];
    if(l){if(c==="\n")l=false;continue;} if(b){if(c==="/"&&p==="*")b=false;continue;}
    if(st){if(c===st&&p!=="\\")st=null;continue;}
    if(c==="/"&&SRC[i+1]==="/"){l=true;continue;} if(c==="/"&&SRC[i+1]==="*"){b=true;continue;}
    if(c==='"'||c==="'"||c==="`"){st=c;continue;}
    if(c==="{"){dep++;seen=true;continue;}
    if(c==="}"){dep--;if(seen&&dep===0)return SRC.slice(m.index,SRC.indexOf("\n",i));}}
}
const M=new Function("getISTDateString",
  [slice("questDayString"),slice("drawDaily"),slice("migrateTasksToInventory"),
   "const DIFFICULTIES=[{key:'easy'},{key:'mid'},{key:'hard'}];",
   "return {questDayString,drawDaily,migrateTasksToInventory};"].join("\n\n")
)((o)=> o===0?"TODAY":"YESTERDAY");

const R=[{time:"05:30"},{time:"07:30"},{time:"22:25"}];
let pass=0;
const t=(n,f)=>{try{f();pass++;console.log("  ✓",n);}catch(e){console.log("  ✗",n,"\n     ",e.message);process.exitCode=1;}};

t("before the first routine, still yesterday's board", ()=>{
  assert.equal(M.questDayString(R, 0),   "YESTERDAY");   // 00:00
  assert.equal(M.questDayString(R, 329), "YESTERDAY");   // 05:29
});
t("at the first routine, the board rolls", ()=>{
  assert.equal(M.questDayString(R, 330), "TODAY");       // 05:30
  assert.equal(M.questDayString(R, 1439),"TODAY");       // 23:59
});
t("no routines -> rolls at midnight", ()=>{
  assert.equal(M.questDayString([], 0), "TODAY");
});
t("malformed times are ignored, not crashed on", ()=>{
  assert.equal(M.questDayString([{time:"oops"},{time:"06:00"}], 300), "YESTERDAY");
});
t("draw picks one per difficulty", ()=>{
  const inv=[{id:1,diff:"easy"},{id:2,diff:"easy"},{id:3,diff:"mid"},{id:4,diff:"hard"}];
  const d=M.drawDaily(inv,"D");
  assert.equal(d.day,"D");
  assert.ok([1,2].includes(d.picks.easy));
  assert.equal(d.picks.mid,3); assert.equal(d.picks.hard,4);
  assert.deepEqual(d.done,[]);
});
t("an empty tier draws nothing rather than throwing", ()=>{
  const d=M.drawDaily([{id:1,diff:"easy"}],"D");
  assert.equal(d.picks.easy,1); assert.equal(d.picks.mid,null); assert.equal(d.picks.hard,null);
});
t("empty inventory is safe", ()=>{
  const d=M.drawDaily([],"D");
  assert.ok(Object.values(d.picks).every(v=>v===null));
});
t("old tasks map onto difficulty, nothing dropped", ()=>{
  const inv=M.migrateTasksToInventory([
    {id:1,text:"a",priority:"high"},{id:2,text:"b",priority:"mid"},
    {id:3,text:"c",priority:"low"},{id:4,text:"d"}]);
  assert.equal(inv.length,4);
  assert.deepEqual(inv.map(t=>t.diff),["hard","mid","easy","mid"]);
});
console.log(`\n  ${pass} passed`);
