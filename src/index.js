import readlineSync from 'readline-sync';

let userName = '';

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
        default:
            console.log('\nWelcome to the Brain Games!');
            break;
    }
};

export const askUserName = () => {
    userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!\n');
};

/*
const randomInteger = (min, max) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
};
*/

const randomInteger = (max) => {
    
    return Math.floor(Math.random() * max) + 1;
};


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
  
const getOperator = (calc) => calc('getOperator');
const getArg1 = (calc) => calc('getArg1');
const getArg2 = (calc) => calc('getArg2');

const generateData = (game) => {
    switch (game) {
        case 'even':
            return randomInteger(99);
        case 'calc':
            return makeCalc(randomOperator(randomInteger(3)), randomInteger(99), randomInteger(99));
    }
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
    }
};

const dataToSring = (game, data) => {
    switch (game) {
        case 'even':
            return `${data}`;
        case 'calc':
            //return getArg1(data) + ' ' + getOperator(data) + ' ' + getArg2(data);
            return `${getArg1(data)} ${getOperator(data)} ${getArg2(data)}`;
    }
};

const isCorrect = (correctAnswer, userAnswer) => {
    if (correctAnswer === userAnswer) return true;
    return false;
};


export const askQ = (game, acc) => {
    if (acc === 3) return console.log(`Congratulations, ${userName}!\n`);
    
    const data = generateData(game);
    
    const correctAnswer = getCorrectAnswer(game, data);
    
    const userAnswer = readlineSync.question('Question: ' + dataToSring(game, data) + '\nYour answer: ');
    
    const testAnswer = isCorrect(correctAnswer, userAnswer);
    if (testAnswer === true) {
        console.log('Correct!');
        return askQ(game, acc + 1);
    }
    console.log(`\n'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!\n`);
    return askQ(game, 0);
};