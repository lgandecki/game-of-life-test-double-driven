import SimulatesConway from './SimulatesConway'
import OutputsWorld from './OutputsWorld'
import GeneratesSeedWorld from './GeneratesSeedWorld'
import MutableWorld from './MutableWorld'
import * as td from 'testdouble'
import ReplacesWorld from './replace/ReplacesWorld'

// type testContext = {
//   subject: SimulatesConway,
//   generatesSeedWorld: td.DoubledObject<GeneratesSeedWorld>,
//   outputsWorld: td.DoubledObject<OutputsWorld>,
//   replacesWorld: td.DoubledObject<ReplacesWorld>
// }

// we don't need to define the type, typescript does it for us :-)
// Left it here so you can see how we could do it, if we wanted
const generateContext = () => {
  const outputsWorld = td.object(new OutputsWorld())
  const generatesSeedWorld = td.object(new GeneratesSeedWorld())
  const replacesWorld = td.object(new ReplacesWorld())
  const subject = new SimulatesConway(generatesSeedWorld, outputsWorld, replacesWorld)
  return {
    outputsWorld,
    generatesSeedWorld,
    replacesWorld,
    subject
  }
}

test('zero generations', () => {
  const { subject, generatesSeedWorld, outputsWorld } = generateContext()
  const seedWorld = new MutableWorld()
  td.when(generatesSeedWorld.generate()).thenReturn(seedWorld)

  subject.simulate(0, 1337)

  td.verify(outputsWorld.output(seedWorld))
})

test('one generation', () => {
  const { subject, generatesSeedWorld, outputsWorld, replacesWorld } = generateContext()
  const seedWorld = new MutableWorld()
  td.when(generatesSeedWorld.generate()).thenReturn(seedWorld)
  const secondWorld = new MutableWorld()
  td.when(replacesWorld.replace(seedWorld, 1337)).thenReturn(secondWorld)

  subject.simulate(1, 1337)

  td.verify(outputsWorld.output(seedWorld))
  td.verify(outputsWorld.output(secondWorld))
})
