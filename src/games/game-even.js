import { randomInteger, makeGameData, mainGame } from '../index';

// rules string const

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".\n';

// check even odd

const isEven = (num) => {
    return num % 2 === 0 ? true : false;
};

// generate game data

const gererateGameData = () => { 
    const min = 1;
    const max = 99;

    const question = randomInteger(min, max);
    
    const questionStr = question.toString();
    const correctAnswerStr = isEven(question) ? 'yes' : 'no';
    
    return makeGameData(questionStr, correctAnswerStr);
};

// game start

export const startGame = () => {
    mainGame(gameTask, gererateGameData);
};