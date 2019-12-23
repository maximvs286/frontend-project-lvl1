import startEngine from '..';
import { randomInteger, makeGameData } from '../function-lib';

const minMumber = 1;
const maxNumber = 99;
const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const gererateGameData = () => {
  const question = randomInteger(minMumber, maxNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return makeGameData(question, correctAnswer);
};

const startGame = () => {
  startEngine(gameTask, gererateGameData);
};

export default startGame;
