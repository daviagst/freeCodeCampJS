const largestOfAll = (array) => {
  const newArray = []
  let atual = 0
  let maior = 0
  let maiorMenor = -Infinity

  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[i].length; j++){
        atual = array[i][j]
        if(atual < 0){
            if(atual < 0){
                if(atual > maiorMenor){
                    maiorMenor = atual
                    maior = maiorMenor
                }
            }
        }
        else if(atual > maior){
            maior = atual
        }
    }
    newArray.push(maior)
    maior = 0
  }

  return newArray
}

console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))