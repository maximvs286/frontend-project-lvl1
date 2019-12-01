import { randomInteger, greeting, makeGameData, enterUserName, mainGame } from '../index';

export const startGame = () => {
    const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

    greeting(rules); // show greeting with rules

    const userName = enterUserName();
    //----------
    const gameGenerator = () => { // game data generator
        const primeMin = 1;
        const primeMax = 99;
        const prime = randomInteger(primeMin, primeMax);
        const questionStr = `${prime}`;
        const isPrime = (num, count) => {
            if (count === num) return 'yes';
            if (num % count === 0) return 'no';
            return isPrime(num, count + 1);
        };
        const countStart = 2;
        const correctAnswerStr = isPrime(prime, countStart);
    //----------
        return makeGameData(questionStr, correctAnswerStr); // game structure for engine
    };
    mainGame(userName, gameGenerator);
};