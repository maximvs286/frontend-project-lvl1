import readlineSync from 'readline-sync';

let userName = '';

export const readName = () => {
    userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!\n');
};

export const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
};

export const askQ = (acc) => {
    if (acc === 3) return console.log(`Congratulations, ${userName}!\n`);
    const askN = randomInteger(1, 99);
    const userAnswer = readlineSync.question('Question: ' + askN + '\nYour answer: ');
    const correctAnswer = (askN) => {
        if (askN % 2 === 0) return 'yes';
        return 'no';
    };
    const isCorrect = (correctAnswer, userAnswer) => {
        if (correctAnswer === userAnswer) return true;
        return false;
    };

    if (isCorrect(correctAnswer(askN), userAnswer) === true) {
        console.log('Correct!');
        return askQ(acc + 1);
    }
    console.log(`\n'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer(askN)}'.\nLet's try again, ${userName}!\n`);
    return askQ(0);
};