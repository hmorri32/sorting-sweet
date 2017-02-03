// const a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function mergeSort(array){
  // Find the length of the array
  const length = array.length;

  // If the length of the array is less than 1, error
  // If the array is not actually an array, error
  if (length === 0 || !Array.isArray(array)){
    throw new Error('error');
  }

  // visualize whats going down with the recursive splitting:
  console.log('splitting ' + array);

  // if length is one, it is considered sorted. woo.
  // the recusion bottoms out when the sequence has length 1
  if (length < 2) {
    return array;
  }

  // split the array in half.
  const halfPoint  = Math.floor(length/2);

  // make a new array from the beginning of the array to the half
  const left       = array.slice(0, halfPoint);

  // make a new array from the right half
  const right      = array.slice(halfPoint);

  // recursion yo. continue to split sort and split and sort until you cant
  // at each level of recusion we do the following:
  // divide the problem into a number of subproblems (splits)
  // sort the two arrays recursively using divideAndConquer
  // mergeSort the two sorted subsequences at the end of divide function
  return divideAndConquer(mergeSort(left), mergeSort(right));
}

function divideAndConquer(left, right){

  // Create empty finished array to push array to later
  const finished   = [];

  // keep track of index values
  const leftIndex  = 0;
  const rightIndex = 0;

  // while indexes are smaller than their length
  while(left.length && right.length){

    // visualize whats going down with the recursive merging:
    console.log('merging ' + finished);

    // current elements

    const elementA = left[leftIndex];
    const elementB = right[rightIndex];

    // push the first (shift) of the smaller value to the finished array
    if(elementA < elementB){
      finished.push(left.shift());

    } else {
      finished.push(right.shift());
    }
  }
  // Return the finished producted (in this case, the smallest number)
  // Then concatenate it with the left (sorted)
  // Then concatenate the right (sorted) array
  return finished.concat(left).concat(right);
}

// console.log(mergeSort(a))

export default mergeSort;
