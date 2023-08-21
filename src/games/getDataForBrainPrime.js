import getRandomIntNum from '../utils.js';

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  const limit = Math.floor(Math.sqrt(num));
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i <= limit; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};

const getDescription = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRoundData = () => {
  const num = getRandomIntNum(0);
  const question = num.toString();
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

export { getDescription, getRoundData };
