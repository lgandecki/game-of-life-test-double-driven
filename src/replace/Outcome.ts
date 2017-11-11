import Contents from './Contents'

export default class Outcome {

  constructor (public contents = new Contents()) {
  }
  nextContents() {}
}
