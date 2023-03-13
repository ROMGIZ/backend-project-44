import readlineSync from 'readline-sync';

const engine = (description, game) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log(description);
    let n = 0;

  do {
    const dataForGame = game();
    const question = dataForGame[0];
    const answer = dataForGame[1];
    console.log (`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
        console.log('Correct!');
        n += 1;
    } else {
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
        console.log(`Let's try again, ${userName}!`);
        return;
    }
  } while (n < 3);
  console.log(`Congratulations ${userName}!`);
};

export default engine;