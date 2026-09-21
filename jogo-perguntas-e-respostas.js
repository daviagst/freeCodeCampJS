const questions = [
  {
    category: "Animais",
    question: "Qual é o maior mamífero do mundo?",
    choices: ["Elefante", "Baleia-azul", "Girafa"],
    answer: "Baleia-azul"
  },

  {
    category: "Geografia",
    question: "Qual é a capital do Brasil?",
    choices: ["São Paulo", "Brasília", "Rio de Janeiro"],
    answer: "Brasília"
  },

  {
    category: "Programação",
    question: "Qual estrutura armazena vários valores em JavaScript?",
    choices: ["Array", "Função", "Condição"],
    answer: "Array"
  },

  {
    category: "Ciências",
    question: "Qual planeta é conhecido como Planeta Vermelho?",
    choices: ["Marte", "Vênus", "Júpiter"],
    answer: "Marte"
  },

  {
    category: "Matemática",
    question: "Quanto é 8 multiplicado por 7?",
    choices: ["54", "56", "64"],
    answer: "56"
  }
]

const getRandomQuestion = (questions) => {
  const randomIndex = Math.floor(Math.random() * questions.length)
  return questions[randomIndex]
}
const selectedQuestion = getRandomQuestion(questions)
console.log(selectedQuestion)



const getRandomComputerChoice = (available) => {
  const randomIndex = Math.floor(Math.random() * available.length)
  return available[randomIndex]
}
const selectedChoice = getRandomComputerChoice(selectedQuestion.choices)
console.log(getRandomComputerChoice(selectedQuestion.choices))



const getResults = (question, computerChoice) => {
  if(computerChoice ===  question.answer){
    return `The computer's choice is correct!`
  }else{
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`
  }
}
console.log(getResults(selectedQuestion, selectedChoice))