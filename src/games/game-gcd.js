import mainGame from '../index';
import { randomInteger, makeGameData } from '../finction-lib';

// rules string const

const gameTask = 'Find the greatest common divisor of given numbers.';

// find an answer

const calcGCD = (arg1, arg2) => {
    const min = (arg1 <= arg2) ? arg1 : arg2;
    const findingCycle = (number) => {
        const minEvenDivisor = 2;
        const minGCDEver = 1;
        if (min < minEvenDivisor) return minGCDEver;
        if (arg1 % number === 0 && arg2 % number === 0) return number;
        return findingCycle(number - 1);
    };
    
    return findingCycle(min);
};

// generate game data

const gererateGameData = () => {
    const gcdMin = 1;
    const gcdMax = 10; // '10' for easy mind calculate
    const gcdArg1 = randomInteger(gcdMin, gcdMax);
    const gcdArg2 = randomInteger(gcdMin, gcdMax);
    
    const question = `${gcdArg1} ${gcdArg2}`;
    const correctAnswer = calcGCD(gcdArg1, gcdArg2).toString();
    
    return makeGameData(question, correctAnswer);
};

// game start

const startGame = () => {
    mainGame(gameTask, gererateGameData);
};

export default startGame;