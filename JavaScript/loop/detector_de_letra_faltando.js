function fearNotLetter(str) {
  for (let i = 1; i < str.length; i++) {
    const esperado = str.charCodeAt(i - 1) + 1;

    if (str.charCodeAt(i) !== esperado) {
      return String.fromCharCode(esperado);
    }
  }

  return undefined;
}

console.log(fearNotLetter("abce"))