const validateString = function(string){
  if( typeof string !== 'string'){
    throw new Error('error')
  };
  if (!string){
    throw new Error('error')
  }
}

const filterMe = (array, string) => {
  validateString(string);

  let newArray = array.filter((value)=>{
    return value !== string
  })
  return newArray
}



export default filterMe
