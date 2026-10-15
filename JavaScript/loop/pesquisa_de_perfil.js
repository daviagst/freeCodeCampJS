let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

const lookUpProfile = (str, property) => {
  for(let i = 0; i < contacts.length; i++){
    if(contacts[i].firstName === str){
        if(contacts[i].firstName === str && contacts[i][property] !== undefined){
            return contacts[i][property]
        }else if(contacts[i].firstName === str && contacts[i][property] === undefined){
            return "No such property"
        }
    }
  }
  for(let i = 0; i < contacts.length; i++){
    if(contacts[i].firstName !== str){
        return "No such contact"
    }
  }
}

console.log(lookUpProfile("Bob", "potato"))

