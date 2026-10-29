const getAverage = (arr) => {
  let soma = 0
  for(let i = 0; i < arr.length; i++){
    soma += arr[i]
  }

  const pontMedia = soma/arr.length

  return pontMedia
}


const getGrade = (pont) => {
    let nota = 0
    if(pont > 100){
       nota = "A+"
    }else if(pont > 90){
        nota = "A"
    }else if(pont > 80){
        nota = "B"
    }else if(pont > 70){
        nota = "C"
    }else if(pont > 60){
        nota = "D"
    }else{
        nota = "D"
    }
    return nota
}


const hasPassingGrade = (pont) => {
    let aprovado = false
    if(pont === "A+" || pont === "A" || pont === "B"){
        return aprovado = true
    }else{
        return aprovado
    }
}

const studentMsg = (arr) => {

}

const pontuacao = getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])
const resultado = getGrade(pontuacao)
const aprovado =  hasPassingGrade(resultado)
