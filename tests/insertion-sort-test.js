import { expect } from 'chai';
import insertionSort from '../scripts/insertion-sort';

describe('TDD with insertion sort', () => {

  it('should return an array', () => {
    expect(Array.isArray(insertionSort(['hello']))).to.be.true;
  });

  it('should throw an error if the function does not receive an array', () => {
    expect( () => insertionSort('yo')).to.throw('error');
  });

  it('should throw an error if the function receives an empty array', () =>{
    expect( () => insertionSort([])).to.throw('error');
  });

  it('should use insertion sort to sort some numbers', () => {
    let insertDis = insertionSort([9, 20, 33, 15, 4, 7, 16, 2]);

    expect(insertDis).to.deep.equal([2, 4, 7, 9, 15, 16, 20, 33]);
    console.log(insertDis);
  });

  it('should use insertion sort to sort some strings', () => {
    let insertDis = insertionSort(['d', 'b', 'c', 'a', 'm', 'g', 'i']);

    expect(insertDis).to.deep.equal(['a', 'b', 'c', 'd', 'g', 'i', 'm']);
  });
});
