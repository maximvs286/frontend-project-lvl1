import { randomInteger, makeGameData, mainGame } from '../index';

// rules string const

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// find an answer

const isPrime = (num, count) => {
    if (count === num) return true;
    if (num % count === 0) return false;
    return isPrime(num, count + 1);
};

// generate game data

const gererateGameData = () => {
    const primeMin = 1;
    const primeMax = 99;
    const primeCandidate = randomInteger(primeMin, primeMax);
    const countStart = 2;

    const correctAnswer = isPrime(primeCandidate, countStart) ? 'yes' : 'no';

    return makeGameData(primeCandidate, correctAnswer);
};

// game start

const startGame = () => {
    mainGame(gameTask, gererateGameData);
};

export default startGame;