import readlineSync from 'readline-sync';

//---------- randomize function ----------

export const randomInteger = (min, max) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
};

//---------- greeting function ----------

export const greeting = (rules) => {
    console.log(`\nWelcome to the Brain Games!\n${rules}`);
};

//---------- capture user name ----------

export const enterUserName = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!\n`);
    return userName;
};

//---------- structure for randomize function ----------

export const makeGameData = (questionStr, correctAnswerStr) => (message) => {
    switch (message) {
        case 'getQuestionStr':
            return questionStr;
        case 'getCorrectAnswerStr':
            return correctAnswerStr;
    }
};

//---------- getters ----------

const getQuestionStr = (gameData) => gameData('getQuestionStr');

const getCorrectAnswerStr = (gameData) => gameData('getCorrectAnswerStr');

//---------- main cycle ----------

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