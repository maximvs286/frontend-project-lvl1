import mainGame from '../index';
import { randomInteger, makeGameData } from '../finction-lib';

// rules string const

const gameTask = 'What is the result of the expression?';

// random operator

const operations = '-+*';

const randomOperator = (operations) => {
    const startPos = 0;
    return operations[randomInteger(startPos, operations.length - 1)];
};

// find an answer

const calcAnswer = (operatorStr, calcArg1, calcArg2) => {
    switch (operatorStr) {
        case '-':
            return calcArg1 - calcArg2;
        case '+':
            return calcArg1 + calcArg2;
        case '*':
            return calcArg1 * calcArg2;
    }
};

// generate game data

const gererateGameData = () => {
    const calcArgMin = 1;
    const calcArgMax = 10; // '10' for easy mind calculate
    const operatorStr = randomOperator(operations);
    const calcArg1 = randomInteger(calcArgMin, calcArgMax);
    const calcArg2 = randomInteger(calcArgMin, calcArgMax);

    const question = `${calcArg1} ${operatorStr} ${calcArg2}`;
    const correctAnswer = calcAnswer(operatorStr, calcArg1, calcArg2).toString();
    
    return makeGameData(question, correctAnswer);
};

// game start

const startGame = () => {
    mainGame(gameTask, gererateGameData);
};

export default startGame;