import mainGame from '../index';
import { randomInteger, makeGameData } from '../finction-lib';

// definitions

const startMinValue = 1;
const startMaxValue = 90;
const incrementMinValue = 1;
const incrementMaxValue = 10;
const hiddenMinValue = 0;
const hiddenMaxValue = 9;
const startNum = randomInteger(startMinValue, startMaxValue);
const increment = randomInteger(incrementMinValue, incrementMaxValue);
const hidden = randomInteger(hiddenMinValue, hiddenMaxValue);
const startAcc = '';
const startCount = 0;
const maxMember = 9; // min progresion number is '0'. so we have 10 elements
const gameTask = 'What number is missing in the progression?';

// calc a prog element

const calcProgressionElement = (progStart, progIncrement, progPosition) => progIncrement * progPosition + progStart;

// generate game data

const gererateGameData = () => {
  const buildProgressionString = (acc, count) => {
    if (count > maxMember) return acc;
    if (count === hidden) acc = `${acc} ..`;
    else acc = `${acc} ${calcProgressionElement(startNum, increment, count)}`;
    return buildProgressionString(acc, count + 1);
  };

  const question = buildProgressionString(startAcc, startCount);
  const correctAnswer = calcProgressionElement(startNum, increment, hidden).toString();
  return makeGameData(question, correctAnswer);
};

// game start

const startGame = () => {
  mainGame(gameTask, gererateGameData);
};

export default startGame;