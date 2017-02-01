// Imagine this shit as though you were playing gin rummie
// And needed to sort your cards.

function insertionSort(stuff) {
  // Grab length of the stuff.
  const length = stuff.length;
  // If the length of the stuff is less than 1 than throw
  if(length < 1){
    throw new Error('error')
  }
  // if the array is not actually an array, throw
  if(!Array.isArray(stuff)){
    throw new Error('error')
  }
  // Loop through the array front to front
  for(let i = 1; i < length; i++) {
    // Define a temporary variable that holds value
    let tank = stuff[i];
    // Loop through the stuff from i - 1 (j)
    for(var j = (i - 1); j >= 0 && stuff[j] > tank; j--) {
      // if the stuff at j + 1 is bigger than the stuff at J, switch em.
      stuff[j+1] = stuff[j];
    }
    // Overwrite j+1 with tank value
    stuff[j + 1] = tank;
    console.log(stuff)
  }
  return stuff
}

// insertionSort([9, 20, 33, 15, 4, 7, 16, 2]);


export default insertionSort;
