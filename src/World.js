"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class World {
    constructor() {
        this.population = new MyMap();
        this.different = Math.random();
    }
}
class MyMap {
    constructor() {
        this.map = new Map();
    }
    set(key, value) {
        this.map.set(JSON.stringify(key), value);
        return this;
    }
    get(key) {
        return this.map.get(JSON.stringify(key));
    }
    clear() {
        this.map.clear();
    }
    delete(key) {
        return this.map.delete(JSON.stringify(key));
    }
    has(key) {
        return this.map.has(JSON.stringify(key));
    }
    get size() {
        return this.map.size;
    }
    forEach(callbackfn, thisArg) {
        this.map.forEach((value, key) => {
            callbackfn.call(thisArg, value, JSON.parse(key), this);
        });
    }
}
exports.default = World;
