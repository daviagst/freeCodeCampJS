const findLongestWordLength = (str) => {
  let longestWorld = 0
  let word = 0
  for(let i = 0; i < str.length; i++ ){
    if(str[i] === " " ){
      if(word > longestWorld){
        longestWorld = word
      }
      word = 0
      continue
    }
    word++
  }
  if(word > longestWorld){
        longestWorld = word
      }
  return longestWorld
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"))