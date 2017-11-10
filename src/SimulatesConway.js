"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const GeneratesSeedWorld_1 = require("./GeneratesSeedWorld");
const OutputsWorld_1 = require("./OutputsWorld");
const ReplacesWorld_1 = require("./replace/ReplacesWorld");
class SimulatesConway {
    constructor(generatesSeedWorld = new GeneratesSeedWorld_1.default(), outputsWorld = new OutputsWorld_1.default(), replacesWorld = new ReplacesWorld_1.default()) {
        this.generatesSeedWorld = generatesSeedWorld;
        this.outputsWorld = outputsWorld;
        this.replacesWorld = replacesWorld;
    }
    simulate(generations, timeLimitInMs) {
        let world = this.generatesSeedWorld.generate();
        _.times(generations, () => {
            this.outputsWorld.output(world);
            world = this.replacesWorld.replace(world, timeLimitInMs);
        });
        this.outputsWorld.output(world);
    }
}
exports.default = SimulatesConway;
