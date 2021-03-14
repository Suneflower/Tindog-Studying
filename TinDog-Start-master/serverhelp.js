// I've currently created a function that takes 2 arrays and finds if they have any simularities,
//  then returns where exactly is the simularitity, like so: 
const checkAddedValues = (target, matches) => {
    const occurencesMap = new Map(),
      entries = Object.entries(target);

    for (const match of matches) {
      const occurences = [];

      occurencesMap.set(match, occurences);

      for (const [k, v] of entries) {
        const indexKey = k.indexOf(match),
          indexValue = v.indexOf(match); //arr.indexOf(searchElement[, fromIndex])

        if (indexKey !== -1)
          occurences.push({ isValue: false, string: k, at: indexKey });
        if (indexValue !== -1)
          occurences.push({ isValue: true, string: v, at: indexValue });
      }
    }
    return occurencesMap;
  };

//   My goal is to find where the simularties are and replace background color in that class, like so :
const changeElementsBgColor = (elements, color) => {
    for(let i=0; i<elements.length; i++) {
      elements[i].style.backgroundColor = color;
    }
  }
  if (document.querySelector(".compareKey")) {
    const elements = document.querySelectorAll(".compareKey")
    changeElementsBgColor(elements, "red");
  }

  if (document.getElementsByClassName("compareValue")) {
    const elements = document.getElementsByClassName("compareValue");    
    changeElementsBgColor(elements, "red");
  }
//   If you've noticed, I don't understand how to access my first function 
//   and check if the boolean isValue:true/false is true or false, based on that boolean I would like to change color

//   The function returns something like this: 

// {"444" => Array(1), "T" => Array(1), ":778" => Array(1)}

// 0: {"444" => Array(1)}
// key: "444"
//   value: Array(1)
//   0: {isValue: true, string: "111:222:444", at: 8}

// 1: {"T" => Array(1)}
// key: "T"
//  value: Array(1)
//  0: {isValue: false, string: "SQL_DT", at: 5}

// 2: {":778" => Array(1)}
// etc
