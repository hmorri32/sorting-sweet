import { expect } from 'chai';
import filterMe from '../scripts/filter';

describe('TDD with filter', () => {
  it('should return an array', () => {
    expect(Array.isArray(filterMe([], 'hello'))).to.be.true;
  });

  it('return an array that is sorted correctly', () => {
    let filterMe2 = filterMe(['suh','dude','dude','suh','tacos','skateboards'],'suh');

    expect(filterMe2).to.deep.equal(['dude','dude','tacos','skateboards']);
    expect(filterMe2.length).to.equal(4);
  });

  it('should throw an error if the function receives a number', function(){
    expect( () => filterMe(['a','c', 'b', 'f', 'd'], 5)).to.throw('error');
  });

  it('should throw an error if the function receives an empty string', function(){
    expect( () => filterMe(['a','c', 'b', 'f', 'd'], '')).to.throw('error');

  });

});
