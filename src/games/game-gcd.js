import { randomInteger, greeting, makeGameData, enterUserName, mainGame } from '../index';

export const startGame = () => {
    const rules = 'Find the greatest common divisor of given numbers.\n';

    greeting(rules); // show greeting with rules

    const userName = enterUserName();
    
    const gameGenerator = () => { // game data generator
        //----------
        const gcdMin = 1;
        const gcdMax = 10; // '10' for easy mind calc
        const gcdArg1 = randomInteger(gcdMin, gcdMax);
        const gcdArg2 = randomInteger(gcdMin, gcdMax);
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
        const correctAnswerStr = calcGCD(gcdArg1, gcdArg2).toString();
        const questionStr = `${gcdArg1} ${gcdArg2}`;
        //----------
        return makeGameData(questionStr, correctAnswerStr); // game structure for engine
    };
    mainGame(userName, gameGenerator);
};