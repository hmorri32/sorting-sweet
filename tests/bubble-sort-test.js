import { expect } from 'chai';
import bubbleSort3 from '../scripts/bubble-sort'

describe('TDD with bubbles', () => {
  it('should return an array', () => {
    expect(Array.isArray(bubbleSort3([], 'hello'))).to.be.true
  })

  it('should bubble sort and return ordered array items', () => {
    let bubbler = bubbleSort3([1, 4, 3, 2, 7])

    expect(bubbler).to.deep.equal([1, 2, 3, 4, 7])
  })

})



const arrayOfNumbers = [8,6,7,5,3,0,9]

arrayOfNumbers.sort((a,b) => {return a - b})

console.log('suh')
