alert('Lets play Rock, paper and Scissors!');
let userScore = 0
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

if (compInput === userInput){
    alert("It's a tie")
}

if (userInput === "rock"){
    if (compInput === "paper"){
        alert("You lose") 
    } else if (compInput === "scissors"){
        alert("You win!")
        userScore += 1
    }
}

if (userInput === "paper"){
    if (compInput === "scissors"){
        alert("You lose") 
    } else if (compInput === "rock"){
        alert("You win!")
        userScore += 1
    }
}

if (userInput === "scissors"){
    if (compInput === "rock"){
        alert("You lose") 
    } else if (compInput === "paper"){
        alert("You win!")
        userScore += 1
    }
}
console.log(userScore)