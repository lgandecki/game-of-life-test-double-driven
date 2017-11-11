import MutableWorld from '../MutableWorld'
import KeepsTime from './KeepsTime'
import ReplacesCell from './ReplacesCell'
import Coordinate from './Coordinate'

export default class ReplacesWorld {

  constructor (public keepsTime = new KeepsTime(), public replacesCell = new ReplacesCell()) {}

  replace (oldWorld: MutableWorld, timeLimitInMs: number): MutableWorld {
    const timeLimit = this.keepsTime.keep(timeLimitInMs)
    let outcome
    let newWorld = new MutableWorld()
    if (!timeLimit.timesUp()) {
      outcome = this.replacesCell.replace(new Coordinate(0, 0), oldWorld)
      console.log('Gandecki outcome', outcome.contents)
      newWorld.set(new Coordinate(0, 0), outcome.contents)
      console.log(newWorld.at(new Coordinate(0, 0)))
      // Do this later
    }
    return newWorld
  }
}
