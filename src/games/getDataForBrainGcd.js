import getRandomIntNum from '../utils.js';

const gcd = (a, b) => {
  if (a === 0) return b;
  if (b === 0) return a;
  let c = a;
  let d = b;
  if (a > b) {
    c %= d;
  } else {
    d %= a;
  }
  return gcd(c, d);
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