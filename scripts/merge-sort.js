const a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function mergeStuff(stuff){
  // visualize whats going down with the recursive splitting:
  console.log("splitting" + stuff)

  // Find the length of the array
  const length = stuff.length;

  // if length is one, it is considered sorted. woo.
  // the recusion bottoms out when the sequence has length 1
  if(length < 2) {
    return stuff;
  }

  // split the array in half.
  const halfStuff  = Math.floor(length/2);
  // make a new array from the beginning of the array to the half
  const left       = stuff.slice(0, halfStuff);
  // make a new array from the right half
  const right      = stuff.slice(halfStuff);
  // recursion yo. continue to split sort and split and sort until you cant
  // at each level of recusion we do the following:
  // divide the problem into a number of subproblems (splits)
  // sort the two arrays recursively using divideAndConquer
  // merge the two sorted subsequences at the end of divide function
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
    // visualize whats going down with the recursive merging:
    console.log("merging " + finished)
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
