import startEngine from '..';
import { randomInteger, makeGameData, findMin } from '../function-lib';

const gcdMin = 1;
const gcdMax = 10;
const gameTask = 'Find the greatest common divisor of given numbers.';

const calcGCD = (arg1, arg2) => {
  const minEvenDivisor = 2;
  const minGCDEver = 1;
  const min = findMin(arg1, arg2);

  const iter = (number) => {
    if (min < minEvenDivisor) return minGCDEver;
    if (arg1 % number === 0 && arg2 % number === 0) return number;
    return iter(number - 1);
  };

  return iter(min);
};

const gererateGameData = () => {
  const gcdArg1 = randomInteger(gcdMin, gcdMax);
  const gcdArg2 = randomInteger(gcdMin, gcdMax);
  const question = `${gcdArg1} ${gcdArg2}`;
  const correctAnswer = calcGCD(gcdArg1, gcdArg2).toString();
  return makeGameData(question, correctAnswer);
};

const startGame = () => {
  startEngine(gameTask, gererateGameData);
};

export default startGame;
