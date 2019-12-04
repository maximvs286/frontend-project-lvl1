import { randomInteger, makeGameData, mainGame } from '../index';

const rulesStr = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const isEven = (num) => {
    return num % 2 === 0 ? true : false;
};

const gameGenerator = () => { // game data generator
    const min = 1;
    const max = 99;

    const question = randomInteger(min, max);
    
    const questionStr = question.toString();
    const correctAnswerStr = isEven(question) ? 'yes' : 'no';
    
    return makeGameData(questionStr, correctAnswerStr); // game structure for engine
};

export const startGame = () => {
    mainGame(rulesStr, gameGenerator); // call main game cycle
};