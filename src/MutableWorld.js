"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const World_1 = require("./World");
class MutableWorld extends World_1.default {
    at(coordinate) {
        return this.population.get(coordinate);
    }
    set(coordinate, contents) {
        this.population.set(coordinate, contents);
    }
}
exports.default = MutableWorld;
