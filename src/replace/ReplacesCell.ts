import Coordinate from './Coordinate'
import MutableWorld from '../MutableWorld'
import Outcome from './Outcome'
import Contents from './Contents'

export default class ReplacesCell {
  replace (coordinate: Coordinate, world: MutableWorld): Outcome {
    return new Outcome(new Contents())
  }
}