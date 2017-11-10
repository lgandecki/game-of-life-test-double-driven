import * as td from 'testdouble'
import KeepsTime from './KeepsTime'
import ReplacesCell from './ReplacesCell'
import TimeLimit from './TimeLimit'
import ReplacesWorld from './ReplacesWorld'
import MutableWorld from '../MutableWorld'
import Outcome from './Outcome'
import Coordinate from './Coordinate'
import Contents from './Contents'

const generateContext = () => {
  const keepsTime = td.object(new KeepsTime())
  const replacesCell = td.object(new ReplacesCell())
  const subject = new ReplacesWorld(keepsTime, replacesCell)
  return { keepsTime, replacesCell, subject }
}

// this test was removed in the video
// test('time for zero cell to be replaced', () => {
//   const { keepsTime, subject } = generateContext()
//   let timeLimit = td.object(new TimeLimit())
//   td.when(timeLimit.timesUp()).thenReturn(true)
//   td.when(keepsTime.keep(1337)).thenReturn(timeLimit)
//   let oldWorld = new MutableWorld()
//   const originalContents = new Contents()
//   oldWorld.set(new Coordinate(0,0), originalContents)
//
//   const result = subject.replace(oldWorld, 1337)
//
//   expect(result.at(new Coordinate(0,0))).toEqual(originalContents)
// })

test('one cell to be replaced', () => {
  const { keepsTime, subject, replacesCell } = generateContext()
  let timeLimit = td.object(new TimeLimit())
  td.when(timeLimit.timesUp()).thenReturn(false, true)
  td.when(keepsTime.keep(1337)).thenReturn(timeLimit)
  let oldWorld = new MutableWorld()
  const nextContents = new Contents()
  const outcome = new Outcome(nextContents)
  td.when(replacesCell.replace(new Coordinate(0, 0), oldWorld)).thenReturn(outcome)

  const result = subject.replace(oldWorld, 1337)

  expect(result.at(new Coordinate(0, 0))).toEqual(nextContents)
})
