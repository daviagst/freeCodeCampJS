const repeatStringNumTimes = (str, num) => {
  let newStr = ""
  if(str.length <= 0){
    return str
  }else{
    for(let i = 0; i < num; i++){
      newStr+= str
    }
  }

  return newStr
}

console.log(repeatStringNumTimes("*", 3))