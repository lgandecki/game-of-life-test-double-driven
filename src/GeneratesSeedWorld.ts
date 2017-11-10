import MutableWorld from './MutableWorld'

export default class GeneratesSeedWorld {

  generate (): MutableWorld {
    return new MutableWorld()
  }
}
