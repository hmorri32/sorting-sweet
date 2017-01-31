import { expect } from 'chai';
import bubbleSort3 from '../scripts/bubble-sort'

describe('TDD with bubbles', () => {
  it('should return an array', () => {
    expect(Array.isArray(bubbleSort3([], 'hello'))).to.be.true
  })

  it('should throw an error if the function does not receive an array', () => {
    expect( () => bubbleSort3('yo')).to.throw('error')
  })

  it('should bubble sort and return ordered array items', () => {
    let bubbler = bubbleSort3([1, 4, 3, 2, 7])
    // console.log(bubbler)
    expect(bubbler).to.deep.equal([1, 2, 3, 4, 7])
  })
})


console.log('suh')
