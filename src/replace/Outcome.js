"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contents_1 = require("./Contents");
class Outcome {
    constructor(contents = new Contents_1.default()) {
        this.contents = contents;
    }
    nextContents() { }
}
exports.default = Outcome;
