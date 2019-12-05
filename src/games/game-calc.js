import { randomInteger, makeGameData, mainGame } from '../index';

// rules string const

const rulesStr = 'What is the result of the expression?\n';

// random operator

const operationList = '-+*';

const randomOperatorStr = (operationList) => {
    const startPos = 0;
    return operationList[randomInteger(startPos, operationList.length)];
};

// find an answer

const calcAnswerStr = (operatorStr, calcArg1, calcArg2) => {
    switch (operatorStr) {
        case '-':
            return (calcArg1 - calcArg2).toString();
        case '+':
            return (calcArg1 + calcArg2).toString();
        case '*':
            return (calcArg1 * calcArg2).toString();
    }
};

// generate game data

const gameGenerator = () => {
    const calcArgMin = 1;
    const calcArgMax = 10; // '10' for easy mind calculate
    const operatorStr = randomOperatorStr(operationList);
    const calcArg1 = randomInteger(calcArgMin, calcArgMax);
    const calcArg2 = randomInteger(calcArgMin, calcArgMax);

    const questionStr = `${calcArg1} ${operatorStr} ${calcArg2}`;
    const correctAnswerStr = calcAnswerStr(operatorStr, calcArg1, calcArg2);
    
    return makeGameData(questionStr, correctAnswerStr);
};

// game start

export const startGame = () => {
    mainGame(rulesStr, gameGenerator);
};