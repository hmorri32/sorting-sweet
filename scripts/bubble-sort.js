
const a = [33, 103, 3, 726, 200, 984, 198, 764, 9];

function bubbleSort1(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if(array[j] > array[j + 1]) {
        const holdingTank = array[j];
        array[j] = array[j + 1];
        array[j + 1] = holdingTank;
        console.log(array)
      }
    }
  }
}

// bubbleSort1(a);


//  Take two.
const bubbleSort2 = array => {
  for (let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      if(array[j] > array[j + 1]){
        let tank = array[j];
        array[j] = array[j + 1]
        array[j + 1] = tank
        console.log(array)
      }
    }
  } return array
};

// bubbleSort2([4, 1, 5, 3, 2, 8, 25, 11, 100, 10])


///  Take three

function swapStuff(items, first, second){
  let tank = items[first];
  items[first] = items[second];
  items[second] = tank;
}

function bubbleSort3(items){
  let length = items.length;
  let i;
  let j;
  for (i = 0; i < length; i++){
    for (j = 0; j < length; j++){
      if (items[j] > items[j + 1]){
        swapStuff(items, j, j + 1);
        console.log(items)
      }
    }
  } return items
}

// bubbleSort3([10,1,3,2,11,6,4,5,8,9,])

//


module.exports =  bubbleSort3
