import readlineSync from 'readline-sync';
import { getQuestion, getCorrectAnswer } from './function-lib';

// definitions
const startValue = 0;
const questionsCount = 3;

// main cycle
const startEngine = (gameTask, gererateGameData) => {
  console.log(`\nWelcome to the Brain Games!\n${gameTask}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const cycleGame = (gameAcc) => {
    if (gameAcc === questionsCount) return console.log(`Congratulations, ${userName}!\n`);
    const data = gererateGameData();
    const question = getQuestion(data);
    const correctAnswer = getCorrectAnswer(data);
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      return cycleGame(gameAcc + 1);
    }
    console.log(`\n'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!\n`);
    return cycleGame(startValue); // it returns "undefined", it's a way the recursion process using
  };

  cycleGame(startValue);
};

export default startEngine;
