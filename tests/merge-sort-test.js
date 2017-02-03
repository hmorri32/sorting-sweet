import { expect } from 'chai';
import mergeSort from '../scripts/merge-sort';

// import { describe } from 'chai';

describe('TDD with merge sort', () => {

  it('should return an array', () => {
    expect(Array.isArray(mergeSort(['hello']))).to.be.true;
  });

  it('should throw an error if the function does not receive an array', () => {
    expect( () => mergeSort('yo')).to.throw('error');
  });

  it('should throw an error if the function receives an empty array', () =>{
    expect( () => mergeSort([])).to.throw('error');
  });

  it('should use merge sort to sort some numbers', () => {
    let mergeDis = mergeSort([34, 203, 3, 746, 200, 984, 198, 764, 9]);

    expect(mergeDis).to.deep.equal([3, 9, 34, 198, 200, 203, 746, 764, 984]);
    console.log(mergeDis);
  });

  it('should also use merge sort to sort strings', () => {
    let mergeDis = mergeSort(['z', 'd', 'a', 'f', 'b', 'x', 'm', 'j']);

    expect(mergeDis).to.deep.equal(['a', 'b', 'd', 'f', 'j', 'm', 'x', 'z']);
    console.log(mergeDis);

  });

});
