import getRandomIntNum from '../utils.js';

const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b);
};

const getDescription = () => 'Find the greatest common divisor of given numbers.';

const getRoundData = () => {
  const firstNum = getRandomIntNum(0);
  const secondNum = getRandomIntNum(0);
  const question = `${firstNum} ${secondNum}`;
  const answer = gcd(firstNum, secondNum).toString();
  return [question, answer];
};

export { getDescription, getRoundData };