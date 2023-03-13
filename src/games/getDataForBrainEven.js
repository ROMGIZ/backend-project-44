import getRandomIntNum from '../utils.js';

const isEven = (num) => (num % 2 === 0);

const getDescription = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const getRoundData = () => {
  const question = getRandomIntNum();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export { getDescription, getRoundData };