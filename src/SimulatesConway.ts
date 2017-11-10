import * as _ from 'lodash'
import GeneratesSeedWorld from './GeneratesSeedWorld'
import OutputsWorld from './OutputsWorld'
import ReplacesWorld from './replace/ReplacesWorld'

export default class SimulatesConway {
  generatesSeedWorld: GeneratesSeedWorld
  outputsWorld: OutputsWorld
  replacesWorld: ReplacesWorld

  constructor (generatesSeedWorld = new GeneratesSeedWorld(), outputsWorld = new OutputsWorld(), replacesWorld = new ReplacesWorld()) {
    this.generatesSeedWorld = generatesSeedWorld
    this.outputsWorld = outputsWorld
    this.replacesWorld = replacesWorld
  }

  simulate (generations: number, timeLimitInMs: number) {
    let world = this.generatesSeedWorld.generate()
    _.times(generations, () => {
      this.outputsWorld.output(world)
      world = this.replacesWorld.replace(world, timeLimitInMs)
    })
    this.outputsWorld.output(world)
  }
}
