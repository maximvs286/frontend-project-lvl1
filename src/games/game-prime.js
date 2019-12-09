import { randomInteger, makeGameData, mainGame } from '../index';

// rules string const

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

// find an answer

const isPrime = (num, count) => {
    if (count === num) return true;
    if (num % count === 0) return false;
    return isPrime(num, count + 1);
};

// generate game data

const gameGenerator = () => {
    const primeMin = 1;
    const primeMax = 99;
    const prime = randomInteger(primeMin, primeMax);
    const countStart = 2;

    const questionStr = `${prime}`;
    const correctAnswerStr = isPrime(prime, countStart) ? 'yes' : 'no';

    return makeGameData(questionStr, correctAnswerStr);
};

// game start

export const startGame = () => {
    mainGame(gameTask, gameGenerator);
};