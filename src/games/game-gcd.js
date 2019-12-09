import { randomInteger, makeGameData, mainGame } from '../index';

// rules string const

const gameTask = 'Find the greatest common divisor of given numbers.\n';

// find an answer

const calcGCD = (arg1, arg2) => {
    const min = (arg1 <= arg2) ? arg1 : arg2;
    const findingCycle = (min) => {
        const minEvenDivisor = 2;
        if (min < minEvenDivisor) return 1;
        if (arg1 % min === 0 && arg2 % min === 0) return min;
        return findingCycle(min - 1);
    };
    return findingCycle(min);
};

// generate game data

const gameGenerator = () => {
    const gcdMin = 1;
    const gcdMax = 10; // '10' for easy mind calculate
    const gcdArg1 = randomInteger(gcdMin, gcdMax);
    const gcdArg2 = randomInteger(gcdMin, gcdMax);
    
    const correctAnswerStr = calcGCD(gcdArg1, gcdArg2).toString();
    const questionStr = `${gcdArg1} ${gcdArg2}`;
    
    return makeGameData(questionStr, correctAnswerStr);
};

// game start

export const startGame = () => {
    mainGame(gameTask, gameGenerator);
};