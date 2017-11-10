"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MutableWorld_1 = require("../MutableWorld");
const KeepsTime_1 = require("./KeepsTime");
const ReplacesCell_1 = require("./ReplacesCell");
const Coordinate_1 = require("./Coordinate");
class ReplacesWorld {
    constructor(keepsTime = new KeepsTime_1.default(), replacesCell = new ReplacesCell_1.default()) {
        this.keepsTime = keepsTime;
        this.replacesCell = replacesCell;
    }
    replace(oldWorld, timeLimitInMs) {
        const timeLimit = this.keepsTime.keep(timeLimitInMs);
        let outcome;
        let newWorld = new MutableWorld_1.default();
        if (!timeLimit.timesUp()) {
            outcome = this.replacesCell.replace(new Coordinate_1.default(0, 0), oldWorld);
            console.log('Gandecki outcome', outcome.contents);
            newWorld.set(new Coordinate_1.default(0, 0), outcome.contents);
            console.log(newWorld.at(new Coordinate_1.default(0, 0)));
            // Do this later
        }
        return newWorld;
    }
}
exports.default = ReplacesWorld;
