import { randomInteger, makeGameData, mainGame } from '../index';

// rules string const

const gameTask = 'What number is missing in the progression?';

// calc a prog element

const calcProgElement = (progStart, progIncrement, progPosition) => progIncrement * progPosition + progStart;

// generate game data

const gererateGameData = () => {
    const progStartMin = 1;
    const progStartMax = 90;
    const progIncrementMin = 1;
    const progIncrementMax = 10;
    const progHiddenMin = 0;
    const progHiddenMax = 9;
    const progStart = randomInteger(progStartMin, progStartMax);
    const progIncrement = randomInteger(progIncrementMin, progIncrementMax);
    const progHidden = randomInteger(progHiddenMin, progHiddenMax);
    
    const startAcc = '';
    const startCount = 0;

    const buildProgString = (acc, count) => {
        const maxProgMember = 9;
        if (count > maxProgMember) return acc;
        if (count === progHidden) acc += '.. ';
        else acc += `${calcProgElement(progStart, progIncrement, count)} `;
        return buildProgString(acc, count + 1);
    };

    const questionStr = buildProgString(startAcc, startCount);
    const correctAnswerStr = calcProgElement(progStart, progIncrement, progHidden).toString();
    
    return makeGameData(questionStr, correctAnswerStr);
};

// game start

const startGame = () => {
    mainGame(gameTask, gererateGameData);
};

export default startGame;