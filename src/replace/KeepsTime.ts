import TimeLimit from './TimeLimit'

export default class KeepsTime {
  keep (timeLimitInMs: number): TimeLimit {
    return new TimeLimit()
  }
}
