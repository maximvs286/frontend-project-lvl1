import startEngine from '..';
import { randomInteger, makeGameData } from '../function-lib';

const min = 1;
const max = 99;
const countStart = 2;
const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const iter = (iterNum, count) => {
    if (count === iterNum) return true;
    if (iterNum % count === 0 || iterNum < count) return false;
    return iter(iterNum, count + 1);
  };

  return iter(num, countStart);
};

const gererateGameData = () => {
  const question = randomInteger(min, max);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return makeGameData(question, correctAnswer);
};

const startGame = () => {
  startEngine(gameTask, gererateGameData);
};

export default startGame;
