"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SimulatesConway_1 = require("./SimulatesConway");
const OutputsWorld_1 = require("./OutputsWorld");
const GeneratesSeedWorld_1 = require("./GeneratesSeedWorld");
const MutableWorld_1 = require("./MutableWorld");
const td = require("testdouble");
const ReplacesWorld_1 = require("./replace/ReplacesWorld");
// type testContext = {
//   subject: SimulatesConway,
//   generatesSeedWorld: td.DoubledObject<GeneratesSeedWorld>,
//   outputsWorld: td.DoubledObject<OutputsWorld>,
//   replacesWorld: td.DoubledObject<ReplacesWorld>
// }
// we don't need to define the type, typescript does it for us :-)
// Left it here so you can see how we could do it, if we wanted
const generateContext = () => {
    const outputsWorld = td.object(new OutputsWorld_1.default());
    const generatesSeedWorld = td.object(new GeneratesSeedWorld_1.default());
    const replacesWorld = td.object(new ReplacesWorld_1.default());
    const subject = new SimulatesConway_1.default(generatesSeedWorld, outputsWorld, replacesWorld);
    return {
        outputsWorld,
        generatesSeedWorld,
        replacesWorld,
        subject
    };
};
test('zero generations', () => {
    const { subject, generatesSeedWorld, outputsWorld } = generateContext();
    const seedWorld = new MutableWorld_1.default();
    td.when(generatesSeedWorld.generate()).thenReturn(seedWorld);
    subject.simulate(0, 1337);
    td.verify(outputsWorld.output(seedWorld));
});
test('one generation', () => {
    const { subject, generatesSeedWorld, outputsWorld, replacesWorld } = generateContext();
    const seedWorld = new MutableWorld_1.default();
    td.when(generatesSeedWorld.generate()).thenReturn(seedWorld);
    const secondWorld = new MutableWorld_1.default();
    td.when(replacesWorld.replace(seedWorld, 1337)).thenReturn(secondWorld);
    subject.simulate(1, 1337);
    td.verify(outputsWorld.output(seedWorld));
    td.verify(outputsWorld.output(secondWorld));
});
