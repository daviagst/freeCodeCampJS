const isPalindrome = (word) => {
  const lowerWord = word.toLowerCase();
  const reversedWord = lowerWord.split("").reverse().join("");

  return lowerWord === reversedWord;
}

const findPalindromeBreaks = (words) => {
  const indices = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      indices.push(i);
    }
  }

  return indices;
}

const findRepeatedPhrases = (words, phraseLength) => {
  const phrases = []
  const indices = []

  if(phraseLength >= words.length){
      return indices
  }
  for(let i = 0; i <= words.length - phraseLength; i++){
      phrases.push(words.slice(i, i + phraseLength).join(" "))
  }

  for(let j = 0; j < phrases.length; j++){
      for(let i = j + 1; i < phrases.length; i++){
          if(phrases[j] === phrases[i]){
              indices.push(j, i)
          }
      }
  }
  return indices
}

const analyzeTexts = (texts, phraseLength) => {
  const array = []
  
  for(let i = 0; i < texts.length; i++){
    array.push({
      repeatedPhrases: findRepeatedPhrases(texts[i], phraseLength),
      palindromeBreaks: findPalindromeBreaks(texts[i])
    })
  }
  return array

}

const texts = [
    ["level", "hello", "level", "hello"],
    ["radar", "casa", "ovo"]
]

console.log(analyzeTexts(texts, 2))