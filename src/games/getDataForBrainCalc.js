import getRandomIntNum from '../utils.js';

const calc = (a, b, operation) => {
  switch (operation) {
    default:
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
  }
};

const getDescription = () => 'What is the result of the expression?';

const getRoundData = () => {
  const firstNum = getRandomIntNum();
  const secondNum = getRandomIntNum();
  const operations = ['+', '-', '*'];
  const randomOperation = operations[getRandomIntNum(0, operations.length - 1)];
  const question = `${firstNum} ${randomOperation} ${secondNum}`;
  const answer = calc(firstNum, secondNum, randomOperation).toString();
  return [question, answer];
};

export { getDescription, getRoundData };