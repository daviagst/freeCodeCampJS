const pyramid = (crtr, line, inverse) => {
    let resultado = "\n"

    if (inverse) {
        for (let i = line - 1; i >= 0; i--) {
            const linha = " ".repeat(line - i - 1) + crtr.repeat(2 * i + 1)
            resultado += linha + "\n"
        }
    } else {
        for (let i = 0; i < line; i++) {
            const linha = " ".repeat(line - i - 1) + crtr.repeat(2 * i + 1)
            resultado += linha + "\n"
        }
    }

    return resultado
}

console.log(pyramid("o", 4, false))