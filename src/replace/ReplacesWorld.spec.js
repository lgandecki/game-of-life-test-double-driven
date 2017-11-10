"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const td = require("testdouble");
const KeepsTime_1 = require("./KeepsTime");
const ReplacesCell_1 = require("./ReplacesCell");
const TimeLimit_1 = require("./TimeLimit");
const ReplacesWorld_1 = require("./ReplacesWorld");
const MutableWorld_1 = require("../MutableWorld");
const Outcome_1 = require("./Outcome");
const Coordinate_1 = require("./Coordinate");
const Contents_1 = require("./Contents");
const generateContext = () => {
    const keepsTime = td.object(new KeepsTime_1.default());
    const replacesCell = td.object(new ReplacesCell_1.default());
    const subject = new ReplacesWorld_1.default(keepsTime, replacesCell);
    return { keepsTime, replacesCell, subject };
};
// this test was removed in the video
// test('time for zero cell to be replaced', () => {
//   const { keepsTime, subject } = generateContext()
//   let timeLimit = td.object(new TimeLimit())
//   td.when(timeLimit.timesUp()).thenReturn(true)
//   td.when(keepsTime.keep(1337)).thenReturn(timeLimit)
//   let oldWorld = new MutableWorld()
//   const originalContents = new Contents()
//   oldWorld.set(new Coordinate(0,0), originalContents)
//
//   const result = subject.replace(oldWorld, 1337)
//
//   expect(result.at(new Coordinate(0,0))).toEqual(originalContents)
// })
test('one cell to be replaced', () => {
    const { keepsTime, subject, replacesCell } = generateContext();
    let timeLimit = td.object(new TimeLimit_1.default());
    td.when(timeLimit.timesUp()).thenReturn(false, true);
    td.when(keepsTime.keep(1337)).thenReturn(timeLimit);
    let oldWorld = new MutableWorld_1.default();
    const nextContents = new Contents_1.default();
    const outcome = new Outcome_1.default(nextContents);
    td.when(replacesCell.replace(new Coordinate_1.default(0, 0), oldWorld)).thenReturn(outcome);
    const result = subject.replace(oldWorld, 1337);
    expect(result.at(new Coordinate_1.default(0, 0))).toEqual(nextContents);
});
