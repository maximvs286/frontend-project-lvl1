import readlineSync from 'readline-sync';
import { getQuestion, getCorrectAnswer } from './function-lib';

// definitions
const accStartValue = 0;
const questionCount = 3;

// main cycle
const mainGame = (gameTask, gererateGameData) => {
  console.log(`\nWelcome to the Brain Games!\n${gameTask}\n`); // greeting function
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const mainGameIter = (gameAcc) => {
    if (gameAcc === questionCount) return console.log(`Congratulations, ${userName}!\n`);
    const data = gererateGameData();
    const question = getQuestion(data);
    const correctAnswer = getCorrectAnswer(data);
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      return mainGameIter(gameAcc + 1);
    }
    console.log(`\n'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!\n`);
    mainGameIter(accStartValue);
    return undefined;
  };

  mainGameIter(accStartValue);
};

export default mainGame;
