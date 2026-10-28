const frankenSplice = (arr1, arr2, indice) => {
    const arr2Copia = arr2.slice()
    arr2Copia.splice(indice, 0, ...arr1)
    return arr2Copia
}

console.log(frankenSplice([1, 2], ["a", "b"], 1))