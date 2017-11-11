import * as _ from 'lodash'
import GeneratesSeedWorld from './GeneratesSeedWorld'
import OutputsWorld from './OutputsWorld'
import ReplacesWorld from './replace/ReplacesWorld'

export default class SimulatesConway {
  constructor (public generatesSeedWorld = new GeneratesSeedWorld(),
               public outputsWorld = new OutputsWorld(),
               public replacesWorld = new ReplacesWorld()) {}

  simulate (generations: number, timeLimitInMs: number) {
    let world = this.generatesSeedWorld.generate()
    _.times(generations, () => {
      this.outputsWorld.output(world)
      world = this.replacesWorld.replace(world, timeLimitInMs)
    })
    this.outputsWorld.output(world)
  }
}
