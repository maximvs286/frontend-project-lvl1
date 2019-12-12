import mainGame from '../index';
import { randomInteger, makeGameData } from '../function-lib';

// definitions
const primeMin = 1;
const primeMax = 99;
const countStart = 2;
const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// find an answer
const calcAnswer = (num) => {
  const iter = (iterNum, count) => {
    if (count === iterNum) return 'yes';
    if (iterNum % count === 0) return 'no';
    return iter(iterNum, count + 1);
  };

  return iter(num, countStart);
};

// generate game data
const gererateGameData = () => {
  const primeCandidate = randomInteger(primeMin, primeMax);
  const correctAnswer = calcAnswer(primeCandidate);
  return makeGameData(primeCandidate, correctAnswer);
};

// game start

const startGame = () => {
  mainGame(gameTask, gererateGameData);
};

export default startGame;
