var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function mergeStuff(stuff){
  // Find the length of the array
  const length = stuff.length;
  // if length is one, it is considered sorted. woo.
  if(length < 2) {
    return stuff;
  }
  // split the array in half.
  var halfStuff  = Math.floor(length/2);
  // make a new array from the beginning of the array to the half
  var left  = stuff.slice(0, halfStuff);
  // make a new array from the right half
  var right = stuff.slice(halfStuff);
  // recursion yo. continue to split and split.
  return divideAndConquer(mergeStuff(left), mergeStuff(right));
}

function divideAndConquer(left, right){
  // Create empty finished array to push stuff to later
  var finished = [];
  // keep track of index values
  var leftIndex = 0;
  var rightIndex = 0;

  // while indexes are smaller than their length
  while(leftIndex < left.length && rightIndex < right.length){
    // current elements
    var elementA = left[leftIndex];
    var elementB = right[rightIndex];

    // push the smaller value to the finished array
    if(elementA < elementB){
      finished.push(left.shift());
    } else {
      finished.push(right.shift());
    }
  }   return finished.concat(left.slice()).concat(right.slice());
}

console.log(mergeStuff(a))
