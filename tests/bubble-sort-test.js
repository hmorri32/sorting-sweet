import { expect } from 'chai';
import bubbleSort3 from '../scripts/bubble-sort';

describe('TDD with bubbles', () => {
  console.log('suh');

  it('should return an array', () => {
    expect(Array.isArray(bubbleSort3([], 'hello'))).to.be.true;
  });

  it('should throw an error if the function does not receive an array', () => {
    expect( () => bubbleSort3('yo')).to.throw('error');
  });

  it('should bubble sort numbers and return and ordered array', () => {
    let bubbler = bubbleSort3([1, 4, 3, 2, 7]);

    expect(bubbler).to.deep.equal([1, 2, 3, 4, 7]);
  });

  it('should also bubble sort strings and return an ordered array', () => {
    let bubbler = bubbleSort3(['z', 'd', 'a', 'f', 'b', 'x', 'm', 'j']);

    expect(bubbler).to.deep.equal(['a', 'b', 'd', 'f', 'j', 'm', 'x', 'z']);
  });

});
