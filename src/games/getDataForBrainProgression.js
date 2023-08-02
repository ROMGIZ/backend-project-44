import getRandomIntNum from '../utils.js';

// const getProgressionAndHiddenEl = () => {
//   const firstNum = getRandomIntNum();
//   const progressionDifference = getRandomIntNum();
//   const indexHiddenEl = getRandomIntNum(0, 9);
//   const arrProgression = [firstNum];
//   let n = 1;
//   do {
//     arrProgression[n] = arrProgression[n - 1] + progressionDifference;
//     n += 1;
//   } while (n < 10);
//   const hiddenEl = arrProgression[indexHiddenEl].toString();
//   arrProgression[indexHiddenEl] = '..';
//   const strProgression = arrProgression.join(' ');
//   return [strProgression, hiddenEl];
// };


const getProgressionAndHiddenEl = () => {
  const firstNum = getRandomIntNum(1, 100);
  const progressionDifference = getRandomIntNum(1, 10);

  let indexHiddenEl;
  do {
    indexHiddenEl = getRandomIntNum(0, 9);
  } while (indexHiddenEl === firstNum || indexHiddenEl === progressionDifference);

  const arrProgression = [firstNum];
  for (let n = 1; n < 10; n++) {
    arrProgression[n] = arrProgression[n - 1] + progressionDifference;
  }

  const hiddenEl = arrProgression[indexHiddenEl].toString();
  arrProgression[indexHiddenEl] = '..';
  const strProgression = arrProgression.join(' ');

  return [strProgression, hiddenEl];
};


const getDescription = () => 'What number is missing in the progression?';

const getRoundData = () => {
  const data = getProgressionAndHiddenEl();
  const question = data[0];
  const answer = data[1];
  return [question, answer];
};

export { getDescription, getRoundData };