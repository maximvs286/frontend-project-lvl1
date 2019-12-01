import { randomInteger, greeting, makeGameData, enterUserName, mainGame } from '../../index';

export const startEven = () => {
    const rules = 'Answer "yes" if the number is even, otherwise answer "no".\n';
    greeting(rules);
    const userName = enterUserName();
    const gameGenerator = () => {
        const min = 1;
        const max = 99;
        const question = randomInteger(min, max);
        const questionStr = question.toString();
        const correctAnswerStr = question % 2 === 0 ? 'yes' : 'no';
        return makeGameData(questionStr, correctAnswerStr);
    };
    mainGame(userName, gameGenerator);
};