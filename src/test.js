import readlineSync from 'readline-sync';
const x = Math.floor(Math.random() * 101);
console.log(x);


const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}!`);

