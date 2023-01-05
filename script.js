alert('Lets play Rock, paper and Scissors!');
let userWins = 0;
let userLosses =0;
let ties = 0;

for (i= 0; i <10; i++){

let userInput = prompt('What do you choose?');
let randomComp = Math.random();
let compInput = '';

if (randomComp <= 0.33) {
    compInput += 'rock';
} else if (randomComp <= 0.66) {
    compInput += 'paper';
} else if (randomComp <= 1) {
    compInput += 'scissors'
}

console.log(compInput)

if (compInput === userInput) {
    alert("It's a tie");
    ties +=1;
}

if (userInput === "rock") {
    if (compInput === "paper") {
        alert("You lose")
        userLosses +=1;
    } else if (compInput === "scissors") {
        alert("You win!");
        userWins += 1;
    }
}

if (userInput === "paper") {
    if (compInput === "scissors") {
        alert("You lose")
        userLosses +=1;
    } else if (compInput === "rock") {
        alert("You win!");
        userWins += 1;
    }
}

if (userInput === "scissors") {
    if (compInput === "rock") {
        alert("You lose")
        userLosses +=1;
    } else if (compInput === "paper") {
        alert("You win!");
        userWins += 1;
    }
}
}
console.log("Your number of wins is " + userWins);
console.log("Your number of losses is " + userLosses);
console.log("The number of ties is " + ties);
