import startEngine from '../index';
import { randomInteger, makeGameData, findMin } from '../function-lib';

// rules string const
const gcdMin = 1;
const gcdMax = 10; // '10' for easy mind calculate
const gameTask = 'Find the greatest common divisor of given numbers.';

// find an answer
const calcGCD = (arg1, arg2) => {
  const minEvenDivisor = 2;
  const minGCDEver = 1;
  const min = findMin(arg1, arg2);

  const findGCD = (number) => {
    if (min < minEvenDivisor) return minGCDEver;
    if (arg1 % number === 0 && arg2 % number === 0) return number;
    return findGCD(number - 1);
  };

  return findGCD(min);
};

// generate game data
const gererateGameData = () => {
  const gcdArg1 = randomInteger(gcdMin, gcdMax);
  const gcdArg2 = randomInteger(gcdMin, gcdMax);
  const question = `${gcdArg1} ${gcdArg2}`;
  const correctAnswer = calcGCD(gcdArg1, gcdArg2).toString();
  return makeGameData(question, correctAnswer);
};

// game start
const startGame = () => {
  startEngine(gameTask, gererateGameData);
};

export default startGame;
