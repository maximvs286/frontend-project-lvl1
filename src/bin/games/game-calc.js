import { randomInteger, greeting, makeGameData, enterUserName, mainGame } from '../../index';

export const startGame = () => {
    const rules = 'What is the result of the expression?\n';
    greeting(rules);
    const userName = enterUserName();
    const gameGenerator = () => {
        const randomOperatorStr = (randomNum) => {
            switch (randomNum) {
                case 1:
                    return '-';
                case 2:
                    return '+';
                case 3:
                    return '*';
            }
        };
        const operatorMin = 1;
        const operatorMax = 3;
        const calcArgMin = 1;
        const calcArgMax = 10;
        const operatorStr = randomOperatorStr(randomInteger(operatorMin, operatorMax));
        const calcArg1 = randomInteger(calcArgMin, calcArgMax);
        const calcArg2 = randomInteger(calcArgMin, calcArgMax);
        const calcAnswer = (operatorStr, calcArg1, calcArg2) => {
            switch (operatorStr) {
                case '-':
                    return (calcArg1 - calcArg2).toString();
                case '+':
                    return (calcArg1 + calcArg2).toString();
                case '*':
                    return (calcArg1 * calcArg2).toString();
            }
        };
        const correctAnswerStr = calcAnswer(operatorStr, calcArg1, calcArg2);
        const questionStr = `${calcArg1} ${operatorStr} ${calcArg2}`;
        return makeGameData(questionStr, correctAnswerStr);
    };
    mainGame(userName, gameGenerator);
};