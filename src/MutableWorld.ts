import World from './World'
import Coordinate from './replace/Coordinate'
import Contents from './replace/Contents'

export default class MutableWorld extends World {
  public at (coordinate: Coordinate): Contents | undefined {
    return this.population.get(coordinate)
  }

  public set (coordinate: Coordinate, contents: Contents): void {
    this.population.set(coordinate, contents)
  }
}