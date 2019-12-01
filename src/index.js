import readlineSync from 'readline-sync';

export const randomInteger = (min, max) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
};

export const greeting = (rules) => {
    console.log(`\nWelcome to the Brain Games!\n${rules}`);
};

export const enterUserName = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!\n`);
    return userName;
};

export const makeGameData = (questionStr, correctAnswerStr) => (message) => {
    switch (message) {
        case 'getQuestionStr':
            return questionStr;
        case 'getCorrectAnswerStr':
            return correctAnswerStr;
    }
};

const getQuestionStr = (gameData) => gameData('getQuestionStr');

const getCorrectAnswerStr = (gameData) => gameData('getCorrectAnswerStr');

export const mainGame = (userName, gameGenerator) => {
    const gameAcc = 0;
    const correctToEnd = 3;
    const mainGameIter = (gameAcc) => {
        if (gameAcc === correctToEnd) return console.log(`Congratulations, ${userName}!\n`);
        const resetAcc = 0;
        const data = gameGenerator();
        const questionStr = getQuestionStr(data);
        const correctAnswerStr = getCorrectAnswerStr(data);
        const userAnswer = readlineSync.question(`Question: ${questionStr}\nYour answer: `);
        if (correctAnswerStr === userAnswer) {
            console.log('Correct!');
            return mainGameIter(gameAcc + 1);
        }
        console.log(`\n'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswerStr}'\nLet's try again, ${userName}!\n`);
        return mainGameIter(resetAcc);
    };
    mainGameIter(gameAcc);
};
/*
import readlineSync from 'readline-sync';

//---------- start functions ----------

export const greeting = (game) => {
    switch (game) {
        case 'even':
            console.log('\nWelcome to the Brain Games!');
            console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
            break;
        case 'calc':
            console.log('\nWelcome to the Brain Games!');
            console.log('What is the result of the expression?\n');
            break;
        case 'gcd':
            console.log('\nWelcome to the Brain Games!');
            console.log('Find the greatest common divisor of given numbers.\n');
            break;
        case 'progression':
            console.log('\nWelcome to the Brain Games!');
            console.log('What number is missing in the progression?\n');
            break;
        case 'prime':
            console.log('\nWelcome to the Brain Games!');
            console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
            break;
        default:
            console.log('\nWelcome to the Brain Games!');
            break;
    }
};

export const askUserName = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!\n');
    return userName;
};

//---------- help functions ----------

const randomInteger = (min, max) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
};

const getCorrectAnswer = (game, data) => {
    switch (game) {
        case 'even':
            if (data % 2 === 0) return 'yes';
            return 'no';
        case 'calc':
            switch (getOperator(data)) {
                case '-':
                    return (getArg1(data) - getArg2(data)).toString();
                case '+':
                    return (getArg1(data) + getArg2(data)).toString();
                case '*':
                    return (getArg1(data) * getArg2(data)).toString();
            }
            break;
        case 'gcd': {
            const findGCD = (arg1, arg2) => {
                const min = (arg1 <= arg2) ? arg1 : arg2;
                const findCycle = (min) => {
                    const minEvenDivisor = 2;
                    if (min < minEvenDivisor ) return 1;
                    if (arg1 % min === 0 && arg2 % min === 0) return min;
                    return findCycle(min - 1);
                };
                return findCycle(min);
            };
            return findGCD(getArg1(data), getArg2(data)).toString();
        }
        case 'progression':
            return (getProgHidden(data) * getProgIncement(data) + getProgStart(data)).toString();
        case 'prime': {
            const isPrime = (num, count) => {
                if (count === num) return 'yes';
                if (num % count === 0) return 'no';
                return isPrime(num, count + 1);
            };
            const countStart = 2;
            return isPrime(data, countStart);
        }
    }
};

const dataToSring = (game, data) => {
    switch (game) {
        case 'even':
            return `${data}`;
        case 'calc':
            return `${getArg1(data)} ${getOperator(data)} ${getArg2(data)}`;
        case 'gcd':
            return `${getArg1(data)} ${getArg2(data)}`;
        case 'progression': {
            const buildProgString = (data, acc, count) => {
                const maxProgMember = 9;
                if (count > maxProgMember) return acc;
                if (count === getProgHidden(data)) acc += '.. ';
                else acc += `${getProgStart(data) + (getProgIncement(data) * count)} `;
                return buildProgString(data, acc, count + 1);
            };
            const startString = '';
            const startAcc = 0;
            return buildProgString(data, startString, startAcc);
        }
        case 'prime':
            return `${data}`;
    }
};

const isCorrect = (correctAnswer, userAnswer) => {
    if (correctAnswer === userAnswer) return true;
    return false;
};

//---------- make data ----------

const makeCalc = (operator, arg1, arg2) => (message) => {
    switch (message) {
        case 'getOperator':
            return operator;
        case 'getArg1':
            return arg1;
        case 'getArg2':
            return arg2;
    }
};

const makeGCD = (arg1, arg2) => (message) => {
    switch (message) {
        case 'getArg1':
            return arg1;
        case 'getArg2':
            return arg2;
    }
};

const makeProgression = (progStart, progIncrement, progHidden) => (message) => {
    switch (message) {
        case 'getProgStart':
            return progStart;
        case 'getProgIncrement':
            return progIncrement;
        case 'getProgHidden':
            return progHidden;
    }
};

//---------- make data constructors ----------

const getOperator = (calc) => calc('getOperator');
const getArg1 = (data) => data('getArg1');
const getArg2 = (data) => data('getArg2');
const getProgStart = (data) => data('getProgStart');
const getProgIncement = (data) => data('getProgIncrement');
const getProgHidden = (data) => data('getProgHidden');

//---------- game data generator ----------

const generateData = (game) => {
    switch (game) {
        case 'even': {
            const minEven = 1;
            const maxEven = 99;
            return randomInteger(minEven, maxEven);
        }
        case 'calc': {
            const randomOperator = (num) => {
                switch (num) {
                    case 1:
                        return '-';
                    case 2:
                        return '+';
                    case 3:
                        return '*';
                }
            };
            const operatorMin = 1;
            const operatorMax = 3;
            const minCalcArg = 1;
            const maxCalcArg = 10;
            const operator = randomOperator(randomInteger(operatorMin, operatorMax));
            const calcArg1 = randomInteger(minCalcArg, maxCalcArg);
            const calcArg2 = randomInteger(minCalcArg, maxCalcArg);
            return makeCalc(operator, calcArg1, calcArg2);
        }
        case 'gcd': {
            const minGCD = 1;
            const maxGCD = 10;
            const gcdArg1 = randomInteger(minGCD, maxGCD);
            const gcdArg2 = randomInteger(minGCD, maxGCD);
            return makeGCD(gcdArg1, gcdArg2); 
        }
        case 'progression': {
            const progStartMin = 1;
            const progStartMax = 99;
            const progIncrementMin = 1;
            const progIncrementMax = 10;
            const progHiddenMin = 0;
            const progHiddenMax = 9;
            const progHidden = randomInteger(progHiddenMin, progHiddenMax);
            const progIncrement = randomInteger(progIncrementMin, progIncrementMax);
            const progStart = randomInteger(progStartMin, progStartMax);
            return makeProgression(progStart, progIncrement, progHidden);
        }
        case 'prime': {
            const primeMin = 1;
            const primeMax = 99;
            return randomInteger(primeMin, primeMax);
        }
    }
};

//---------- main game cycle ---------

export const mainGame = (game, userName, gameAcc) => {
    const resetAcc = 0;
    const correctToEnd = 3;
    if (gameAcc === correctToEnd) return console.log(`Congratulations, ${userName}!\n`);
    const data = generateData(game);
    const correctAnswer = getCorrectAnswer(game, data);
    const userAnswer = readlineSync.question(`Question: ${dataToSring(game, data)} \nYour answer: `);
    const testAnswer = isCorrect(correctAnswer, userAnswer);
    if (testAnswer === true) {
        console.log('Correct!');
        return mainGame(game, userName, gameAcc + 1);
    }
    console.log(`\n'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!\n`);
    return mainGame(game, userName, resetAcc);
};
*/