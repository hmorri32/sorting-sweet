const a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function mergeStuff(stuff){
  // Find the length of the array
  const length = stuff.length;
  // if length is one, it is considered sorted. woo.
  if(length < 2) {
    return stuff;
  }
  // split the array in half.
  const halfStuff  = Math.floor(length/2);
  // make a new array from the beginning of the array to the half
  const left       = stuff.slice(0, halfStuff);
  // make a new array from the right half
  const right      = stuff.slice(halfStuff);
  // recursion yo. continue to split and split.
  return divideAndConquer(mergeStuff(left), mergeStuff(right));
}

function divideAndConquer(left, right){
  // Create empty finished array to push stuff to later
  const finished   = [];
  // keep track of index values
  const leftIndex  = 0;
  const rightIndex = 0;

  // while indexes are smaller than their length
  while(leftIndex < left.length && rightIndex < right.length){
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

// console.log(mergeStuff(a))
