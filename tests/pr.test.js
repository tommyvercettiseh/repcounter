import test from 'node:test';
import assert from 'node:assert/strict';
const e1rm=(weight,reps)=>Math.round((weight*(1+reps/30))*10)/10;
test('berekent e1RM',()=>assert.equal(e1rm(90,5),105));
test('zwaarder of meer reps verhoogt e1RM',()=>assert.ok(e1rm(92.5,5)>e1rm(90,5)));
