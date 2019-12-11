import mainGame from '../index';
import { randomInteger, makeGameData } from '../finction-lib';

// definitions

const minMumber = 1;
const maxNumber = 99;
const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

// check even odd

const isEven = (num) => {
  return num % 2 === 0 ? true : false;
};

// generate game data

const gererateGameData = () => {
  const question = randomInteger(minMumber, maxNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return makeGameData(question, correctAnswer);
};

// game start

const startGame = () => {
  mainGame(gameTask, gererateGameData);
};

export default startGame;