import { randomInteger, makeGameData, mainGame } from '../index';

// rules string const

const gameTask = 'What number is missing in the progression?';

// calc a prog element

const calcProgressionElement = (progStart, progIncrement, progPosition) => progIncrement * progPosition + progStart;

// generate game data

const gererateGameData = () => {
    const progressionStartMinValue = 1;
    const progressionStartMaxValue = 90;
    const progressionIncrementMinValue = 1;
    const progressionIncrementMaxValue = 10;
    const progressionHiddenMinValue = 0;
    const progressionHiddenMaxValue = 9;
    const progressionStart = randomInteger(progressionStartMinValue, progressionStartMaxValue);
    const progressionIncrement = randomInteger(progressionIncrementMinValue, progressionIncrementMaxValue);
    const progressionHidden = randomInteger(progressionHiddenMinValue, progressionHiddenMaxValue);
    
    const startAcc = '';
    const startCount = 0;

    const buildProgressionString = (acc, count) => {
        const maxProgressionMember = 9;
        if (count > maxProgressionMember) return acc;
        if (count === progressionHidden) acc = `${acc} ..`;
        else acc = `${acc} ${calcProgressionElement(progressionStart, progressionIncrement, count)}`;
        return buildProgressionString(acc, count + 1);
    };

    const question = buildProgressionString(startAcc, startCount);
    const correctAnswer = calcProgressionElement(progressionStart, progressionIncrement, progressionHidden).toString();
    
    return makeGameData(question, correctAnswer);
};

// game start

const startGame = () => {
    mainGame(gameTask, gererateGameData);
};

export default startGame;