import { randomInteger, makeGameData, mainGame } from '../index';

// rules string const

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

// check even odd

const isEven = (num) => {
    return num % 2 === 0 ? true : false;
};

// generate game data

const gererateGameData = () => { 
    const min = 1;
    const max = 99;

    const question = randomInteger(min, max);
    
    const questionStr = question;
    const correctAnswerStr = isEven(question) ? 'yes' : 'no';
    
    return makeGameData(questionStr, correctAnswerStr);
};

// game start

const startGame = () => {
    mainGame(gameTask, gererateGameData);
};

export default startGame;