const getAverage = (arr) => {
    let soma = 0
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i]
    }

    const pontMedia = soma / arr.length

    return pontMedia
}


const getGrade = (pont) => {
    let nota = 0
    if (pont === 100) {
        nota = "A+"
    } else if (pont >= 90) {
        nota = "A"
    } else if (pont >= 80) {
        nota = "B"
    } else if (pont >= 70) {
        nota = "C"
    } else if (pont >= 60) {
        nota = "D"
    } else {
        nota = "F"
    }
    return nota
}


const hasPassingGrade = (pont) => {
    return getGrade(pont) !== "F"
}

const studentMsg = (totalScores, studentScore) => {
    const average = getAverage(totalScores)
    const grade = getGrade(studentScore)
    if (hasPassingGrade(studentScore)) {
        return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
    } else {
        return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
    }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37))