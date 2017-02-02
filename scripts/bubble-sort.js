
//  Take two.

const bubbleSort = array => {
  // Two for loops. dále.
  for (let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      if(array[j] > array[j + 1]){
        // define a temporary holding tank for your value.
        // without this temporary tank, one of the values will be overwritten.
        let tank = array[j];
        // switch the values.
        array[j] = array[j + 1]
        // switch em back.
        array[j + 1] = tank
        console.log(array)
      }
    }
  } return array
};


///  Take three
// Make helper function for that swapswap
function swapStuff(items, first, second){
  // temporary variable. holding tank. hold the value as it will change later
  // without this temporary tank, one of the values will be overwritten.

  let tank = items[first];
  items[first] = items[second];
  items[second] = tank;
}

function bubbleSort3(array){
  // If array is not an array chuck an error, m8.
  if(!Array.isArray(array)){
    throw new Error('error')
  }
  let length = array.length;
  // Loop through these puppies. utah, gimme 2.
  for (let i = 0; i < length; i++){
    for (let j = 0; j < length; j++){
      // If the stuff is bigger than the other stuff, switch em.
      if (array[j] > array[j + 1]){
        swapStuff(array, j, j + 1);
        console.log(array)
      }
    }
  } return array
}

// bubbleSort3([10,1,3,2,11,6,4,5,8,9,])


export default bubbleSort3
