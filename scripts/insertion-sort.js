function insertionSort(stuff) {
  if(stuff.length < 1){
    throw new Error('error')
  }

  if(!Array.isArray(stuff)){
    throw new Error('error')
  }

  var length = stuff.length;

  for(var i = 1; i < length; i++) {
    var tank = stuff[i];
    for(var j = (i - 1); j >= 0 && stuff[j] > tank; j--) {
      stuff[j+1] = stuff[j];
    }
    stuff[j + 1] = tank;
    console.log(stuff)
  } return stuff
}

// insertionSort([9, 20, 33, 15, 4, 7, 16, 2]);


module.exports = insertionSort
