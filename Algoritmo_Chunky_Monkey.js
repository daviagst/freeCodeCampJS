const chunkArrayInGroups = (array, num) => {
  let partes = 0
  const newArray = []
  for(let i = 0; i < num; i++){
    partes = array.slice(i, num)
    newArray.push(partes)
  }
  return newArray
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))