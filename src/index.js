import readlineSync from 'readline-sync';
import { getQuestion, getCorrectAnswer } from './finction-lib';

//---------- main cycle ----------

const mainGame = (gameTask, gererateGameData) => {
    console.log(`\nWelcome to the Brain Games!\n${gameTask}\n`); // greeting function
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!\n`);
    const gameAcc = 0;
    const correctToEnd = 3;

    const mainGameIter = (gameAcc) => {
        if (gameAcc === correctToEnd) return console.log(`Congratulations, ${userName}!\n`);
        const resetAcc = 0;
        const data = gererateGameData();
        const question = getQuestion(data);
        const correctAnswer = getCorrectAnswer(data);
        const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
        if (correctAnswer === userAnswer) {
            console.log('Correct!');
            return mainGameIter(gameAcc + 1);
        }
        console.log(`\n'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!\n`);
        return mainGameIter(resetAcc);
    };
    
    mainGameIter(gameAcc);
};

export default mainGame;