import Coordinate from './replace/Coordinate'
import Contents from './replace/Contents'

abstract class World {
  different: Number
  protected population = new MyMap()

  constructor () {
    this.different = Math.random()
  }

  public abstract at (coordinate: Coordinate): Contents | undefined
}

class MyMap {
  private map = new Map<string, Contents>()

  set (key: Coordinate, value: Contents): this {
    this.map.set(JSON.stringify(key), value)
    return this
  }

  get (key: Coordinate): Contents | undefined {
    return this.map.get(JSON.stringify(key))
  }

  clear () {
    this.map.clear()
  }

  delete (key: Coordinate): boolean {
    return this.map.delete(JSON.stringify(key))
  }

  has (key: Coordinate): boolean {
    return this.map.has(JSON.stringify(key))
  }

  get size () {
    return this.map.size
  }

  forEach (callbackfn: (value: Contents, key: Coordinate, map: Map<Coordinate, Contents>) => void, thisArg?: any): void {
    this.map.forEach((value, key) => {
      callbackfn.call(thisArg, value, JSON.parse(key), this)
    })
  }
}

export default World
