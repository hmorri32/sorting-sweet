
//  Take two.
const bubbleSort = array => {
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


///  Take three

function swapStuff(items, first, second){
  let tank = items[first];
  items[first] = items[second];
  items[second] = tank;
}

function bubbleSort3(array){
  if(!Array.isArray(array)){
    throw new Error('error')
  }
  let length = array.length;
  for (let i = 0; i < length; i++){
    for (let j = 0; j < length; j++){
      if (array[j] > array[j + 1]){
        swapStuff(array, j, j + 1);
        console.log(array)
      }
    }
  } return array
}

// bubbleSort3([10,1,3,2,11,6,4,5,8,9,])


export default bubbleSort3
