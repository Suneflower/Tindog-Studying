// const choices = ["paper","rock","scissors"];
// function playGame(inputChoice) {
//     let humanChoice = inputChoice.alt ;
//     let botChoice = choices[Math.floor(Math.random() * choices.length)];
//     document.querySelector("#playGame1").setAttribute("src","gameImg/"+ humanChoice+".png");
//     document.querySelector("#playGame2").remove();
//     document.querySelector("#playGame3").setAttribute("src","gameImg/"+ botChoice+".png");
//     if (humanChoice===botChoice) {
//         document.querySelector("h2").innerHTML=("Challenge 3: Rock, Paper, Scissors! Draw")
//      } else if (humanChoice==="scissors" && botChoice ==="paper" || humanChoice==="rock" && botChoice ==="scissors" ||humanChoice==="paper" && botChoice ==="rock") {
//         document.querySelector("h2").innerHTML=("Challenge 3: Rock, Paper, Scissors! You won")
//      } else {
//         document.querySelector("h2").innerHTML=("Challenge 3: Rock, Paper, Scissors! You lost")
//      }
// }


const choices = ["paper", "rock", "scissors"];
function playGame(inputChoice) {
  let humanChoice = inputChoice.id;
  let botChoice = choices[Math.floor(Math.random() * choices.length)];
  document
    .querySelector("#rock")
    .setAttribute("src", "gameImg/" + humanChoice + ".png");
  // create new h3 element
  const relacedItem = document.querySelector("#paper");
  const newItem = document.createElement("h3");
  relacedItem.parentNode.replaceChild(newItem, relacedItem);
  document.querySelector("h3").classList.add("display-winner");

  document
    .querySelector("#scissors")
    .setAttribute("src", "gameImg/" + botChoice + ".png");

  if (humanChoice === botChoice) {
    document.querySelector("h3").innerHTML = "Draw";
  } else if (
    (humanChoice === "scissors" && botChoice === "paper") ||
    (humanChoice === "rock" && botChoice === "scissors") ||
    (humanChoice === "paper" && botChoice === "rock")
  ) {
    document.querySelector("h3").innerHTML = "You won";
  } else {
    document.querySelector("h3").innerHTML = "You lost";
  }
}



// for (i = 0; i < document.querySelectorAll("#challenge img").length; i++) {
//    document.querySelectorAll("#challenge img")[i].addEventListener("click", playGame);
//  }

// function playGame() {
//   const choices = ["paper", "rock", "scissors"];   
//   let humanChoice = this.id;
//   let botChoice = choices[Math.floor(Math.random() * choices.length)];
//   document
//     .querySelector("#rock")
//     .setAttribute("src", "gameImg/" + humanChoice + ".png");
//   // create new h3 element
//   const relacedItem = document.querySelector("#paper");
//   const newItem = document.createElement("h3");
//   relacedItem.parentNode.replaceChild(newItem, relacedItem);
//   document.querySelector("h3").classList.add("display-winner");

//   document
//     .querySelector("#scissors")
//     .setAttribute("src", "gameImg/" + botChoice + ".png");

//   if (humanChoice === botChoice) {
//     document.querySelector("h3").innerHTML = "Draw";
//   } else if (
//     (humanChoice === "scissors" && botChoice === "paper") ||
//     (humanChoice === "rock" && botChoice === "scissors") ||
//     (humanChoice === "paper" && botChoice === "rock")
//   ) {
//     document.querySelector("h3").innerHTML = "You won";
//   } else {
//     document.querySelector("h3").innerHTML = "You lost";
//   }
// }



// for (i = 0; i < document.querySelectorAll("#challenge img").length; i++) {
//    document.querySelectorAll("#challenge img")[i].addEventListener("click", playGame);
// } 

// function playGame() {
//   const choices = ["paper", "rock", "scissors"];   
//   let humanChoice = this.id;
//   let botChoice = choices[Math.floor(Math.random() * choices.length)];
//   document
//     .querySelector("#rock")
//     .setAttribute("src", "gameImg/" + humanChoice + ".png");
//   const relacedItem = document.querySelector("#paper");
//   const newItem = document.createElement("h3");
//   relacedItem.parentNode.replaceChild(newItem, relacedItem);
//   document.querySelector("h3").classList.add("display-winner");

//   document
//     .querySelector("#scissors")
//     .setAttribute("src", "gameImg/" + botChoice + ".png");

//   if (humanChoice === botChoice) {
//     document.querySelector("h3").innerHTML = "Draw";
//   } else if (
//     (humanChoice === "scissors" && botChoice === "paper") ||
//     (humanChoice === "rock" && botChoice === "scissors") ||
//     (humanChoice === "paper" && botChoice === "rock")
//   ) {
//     document.querySelector("h3").innerHTML = "You won";
//   } else {
//     document.querySelector("h3").innerHTML = "You lost";
//   }
// }

// function reset() {
//    document.querySelectorAll("#challenge img").removeEventListener("click", playGame);
//  }






// function reset() {
//   document
//     .getElementsByClassName("btn-danger")
//     .removeEventListener("click", playGame)

// }
// }

// function reset() {
//     document.querySelector("reset").remove();
// }

// const listItem = document.querySelector("li:last-child");
// const newItem = document.createElement('li');
// newItem.innerHTML = '<a href="/products">Products</a>';
// listItem.parentNode.replaceChild(newItem, listItem);

//document.querySelector(".let-play").remove(); - remove all

// let botChoice = ["paper","rock","scissors"][Math.floor(Math.random() * choices.length)];
//let botChoice = choices[Math.floor(Math.random() * choices.length)];
//console.log(botChoice);

//document.querySelector(".let-play").classList.add("") // remove/toggle

//document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");
