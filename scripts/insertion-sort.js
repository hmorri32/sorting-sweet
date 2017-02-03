// Imagine this shit as though you were playing gin rummie
// And needed to sort your cards.

function insertionSort(array) {
  // Grab length of the array.
  const length = array.length;

  // If the length of the array is less than 1, throw
  // if the array is not actually an array, throw
  if(length === 0 || !Array.isArray(array)){
    throw new Error('error');
  }

  // Loop through the array
  // Assume the first element is already sorted
  for(let i = 1; i < length; i++) {
    // Define a temporary variable that holds value as it may change
    // This refers to the element you are examining in each iteration
    let tank = array[i];

    // Loop through the unsorted portion back to front.
    for(var j = (i - 1); j >= 0 && array[j] > tank; j--) {
      array[j + 1] = array[j];
    }
    // Overwrite j+1 with the element you are inspecting's value
    array[j + 1] = tank;
    // visualize this happening
    console.log(array);
  }
  return array;
}

// insertionSort([9, 20, 33, 15, 4, 7, 16, 2]);


export default insertionSort;
