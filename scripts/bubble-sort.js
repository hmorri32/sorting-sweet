
var a = [33, 103, 3, 726, 200, 984, 198, 764, 9];

function bubbleSort(items) {
  var length = items.length;
  for (var i = 0; i < length; i++) { //Number of passes
    for (var j = 0; j < (length - i - 1); j++) {
      if(items[j] > items[j + 1]) {
        var tmp = items[j];  //Temporary variable to hold the current number
        items[j] = items[j + 1]; //Replace current number with adjacent number
        items[j + 1] = tmp; //Replace adjacent number with current number
      }
    }
  }
}

bubbleSort(a);
console.log(a);


//  Take two.
var bubbleSort = function(array) {
  for (var i = 0; i < array.length; i++){
    for(var j = 0; j < array.length; j++){
      if(array[j] > array[j + 1]){
        var tank = array[j];
        array[j] = array[j + 1]
        array[j + 1] = tank
        console.log(array)
      }
    }
  }
  return array
}

bubbleSort([4, 1, 5, 3, 2, 8, 25, 11, 100, 10])


///  Take three

function swap(items, first, second){
    var temp = items[first];
    items[first] = items[second];
    items[second] = temp;
}

function bubbleSort(items){
    var len = items.length,
        i, j, stop;
    for (i = 0; i < len; i++){
        for (j = 0; j < len; j++){
            if (items[j] > items[j + 1]){
                swap(items, j, j + 1);
                console.log(items)
            }
        }
    }

    return items;
}

bubbleSort([10,1,3,2,6,4,5,8,9,11])

//
