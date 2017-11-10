"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TimeLimit_1 = require("./TimeLimit");
class KeepsTime {
    keep(timeLimitInMs) {
        return new TimeLimit_1.default();
    }
}
exports.default = KeepsTime;
