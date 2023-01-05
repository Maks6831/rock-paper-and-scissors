alert('Lets play Rock, paper and Scissors!');
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

