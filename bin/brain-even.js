#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}`);
console.log ('Answer "yes" if the number is even, otherwise answer "no".');
    

let i = 0;
while (i < 3) {
    let randomNumb = Math.floor(Math.random() * 101);
    console.log('Question: ' + randomNumb);
    const answer = readlineSync.question('Your answer: ');

    if (randomNumb % 2 === 0 && answer === 'yes') {
        console.log('Correct!');
        i += 1;  
    } else if (randomNumb % 2 === 1 && answer === 'no') {
        console.log('Correct!');
        i += 1;
    } else if (randomNumb % 2 === 0 && answer !== 'yes') {
        console.log(`'${answer}' "is wrong answer ;(. Correct answer was 'yes'."`);
        console.log(`Let's try again, ${name}!`);
        i += 4;
    } else {
        console.log(`'${answer}' "is wrong answer ;(. Correct answer was 'no'."`);
        console.log(`Let's try again, ${name}!`);
        i += 4;
    }
};

if (i === 3) {
console.log(`Congratulations, ${name}!`);
};