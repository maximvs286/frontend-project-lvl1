import { randomInteger, greeting, makeGameData, enterUserName, mainGame } from '../index';

export const startGame = () => {
    const rules = 'Answer "yes" if the number is even, otherwise answer "no".\n';

    greeting(rules); // show greeting with rules

    const userName = enterUserName();
    
    const gameGenerator = () => { // game data generator
        //----------
        const min = 1;
        const max = 99;
        const question = randomInteger(min, max);
        const questionStr = question.toString();
        const correctAnswerStr = question % 2 === 0 ? 'yes' : 'no';
        //----------
        return makeGameData(questionStr, correctAnswerStr); // game structure for engine
    };
    mainGame(userName, gameGenerator); // call main game cycle
};