import readlineSync from 'readline-sync';

//---------- randomize function ----------

export const randomInteger = (min, max) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
};

//---------- structure for randomize function ----------

export const makeGameData = (question, correctAnswer) => (message) => {
    switch (message) {
        case 'getQuestion':
            return question;
        case 'getCorrectAnswer':
            return correctAnswer;
    }
};

//---------- getters ----------

const getQuestion = (gameData) => gameData('getQuestion');

const getCorrectAnswer = (gameData) => gameData('getCorrectAnswer');

//---------- main cycle ----------

export const mainGame = (gameTask, gererateGameData) => {
    console.log(`\nWelcome to the Brain Games!\n${gameTask}\n`); // greeting function
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!\n`);
    const gameAcc = 0;
    const correctToEnd = 3;

    const mainGameIter = (gameAcc) => {
        if (gameAcc === correctToEnd) return console.log(`Congratulations, ${userName}!\n`);
        const resetAcc = 0;
        const data = gererateGameData();
        const question = getQuestion(data);
        const correctAnswer = getCorrectAnswer(data);
        const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
        if (correctAnswer === userAnswer) {
            console.log('Correct!');
            return mainGameIter(gameAcc + 1);
        }
        console.log(`\n'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!\n`);
        return mainGameIter(resetAcc);
    };
    
    mainGameIter(gameAcc);
};