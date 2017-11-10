"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MutableWorld_1 = require("./MutableWorld");
class GeneratesSeedWorld {
    generate() {
        return new MutableWorld_1.default();
    }
}
exports.default = GeneratesSeedWorld;
