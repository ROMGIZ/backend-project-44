import getRandomIntNum from '../utils.js';

const isSimpleNum = (num) => {
  const iter = (counter) => {
    const remainder = num % counter;
    if (counter > Math.floor(num ** 1 / 2)) return true;
    if (remainder === 0) return false;
    return iter(counter + 1);
  };

  return iter(2);
};

const getDescription = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRoundData = () => {
  const num = getRandomIntNum(0);
  const question = num.toString();
  const answer = isSimpleNum(num) ? 'yes' : 'no';
  return [question, answer];
};

export { getDescription, getRoundData };