import { randomInteger, makeGameData, mainGame } from '../index';

// rules string const

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// find an answer

const isPrime = (num) => {
    const countStart = 2;

    const iter = (num, count) => {
        if (count === num) return 'yes';
        if (num % count === 0) return 'no';
        return iter(num, count + 1);
    };
    
    return iter(num, countStart);
};

// generate game data

const gererateGameData = () => {
    const primeMin = 1;
    const primeMax = 99;
    const primeCandidate = randomInteger(primeMin, primeMax);

    const correctAnswer = isPrime(primeCandidate);

    return makeGameData(primeCandidate, correctAnswer);
};

// game start

const startGame = () => {
    mainGame(gameTask, gererateGameData);
};

export default startGame;