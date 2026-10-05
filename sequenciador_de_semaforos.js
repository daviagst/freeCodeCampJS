const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

const runSequence = (config, cycles) => {
  if(config.phases === undefined){
    console.log("No phases found")
    return
  }else if(config.fault === true){
    console.log("Faulted phase!")
    return
  } 
  else{
    for(let i = 0; i < cycles; i++){
      for(let j = 0; j < config.phases.length; j++){
        console.log(config.phases[j])
      }
    }
  }
}

runSequence(config1, 2)

