"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Outcome_1 = require("./Outcome");
const Contents_1 = require("./Contents");
class ReplacesCell {
    replace(coordinate, world) {
        return new Outcome_1.default(new Contents_1.default());
    }
}
exports.default = ReplacesCell;
