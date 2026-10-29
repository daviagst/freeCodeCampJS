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
    if(pont === 100){
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
        nota = "F"
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

const studentMsg = (arr, aprovado) => {
    if(aprovado){
        return `Class average: ${arr[0]}. Your grade: ${arr[1]}. You passed the course.`
    }else{
        return `Class average: ${arr[0]}. Your grade: ${arr[1]}. You failed the course.`
    }
}

const pontuacao = getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100])
const resultado = getGrade(pontuacao)
console.log(resultado)
const aprovado =  hasPassingGrade(resultado)
console.log(aprovado)
const aluno = [pontuacao, resultado]
const msg = studentMsg(aluno, aprovado)
console.log(msg)
