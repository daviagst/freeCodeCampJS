const mutation = (array) => {
  for(let cont = 0; cont < array.length; cont++){
    array[cont] = array[cont].toLowerCase()
  }
  const wordFirst = array[0]
  const wordSecond = array[1]
  let find = false

  for(let i = 0; i < wordSecond.length; i++){
    let letter = wordSecond[i]

    if(wordFirst.includes(letter)){
        find = true
    }else{
        find = false
        return find
    }
  }
  return true
}

let word = ["zyxwvutsrqponmlkjihgfedcba", "qrstu"]
console.log(mutation(word))
