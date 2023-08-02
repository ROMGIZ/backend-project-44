import readlineSync from 'readline-sync';

// Тут мы принимаем два параметра. Первый это описание задачи и вопрос getDescription. 
// Второе это сам функционал игры getRoundData.
const engine = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let n = 0; n < 3; n += 1) {
    //dataForGame принимает getRoundData
    const dataForGame = game();
    const [question, answer] = dataForGame;
    // const question = dataForGame[0];
    // const answer = dataForGame[1];
    console.log(`Question: ${question} `);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } else {
      console.log('Correct!');
    }

    if (n === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default engine;


