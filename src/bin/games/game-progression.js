import { randomInteger, greeting, makeGameData, enterUserName, mainGame } from '../../index';

export const startGame = () => {
    const rules = 'What number is missing in the progression?\n';

    greeting(rules); // show greeting with rules

    const userName = enterUserName();

    const gameGenerator = () => { // game data generator
        //----------
        const progStartMin = 1;
        const progStartMax = 90;
        const progIncrementMin = 1;
        const progIncrementMax = 10;
        const progHiddenMin = 0;
        const progHiddenMax = 9;
        const progStart = randomInteger(progStartMin, progStartMax);
        const progIncrement = randomInteger(progIncrementMin, progIncrementMax);
        const progHidden = randomInteger(progHiddenMin, progHiddenMax);
        const correctAnswerStr = (progHidden * progIncrement + progStart).toString();
        const buildProgString = (acc, count) => {
            const maxProgMember = 9;
            if (count > maxProgMember) return acc;
            if (count === progHidden) acc += '.. ';
            else acc += `${progStart + progIncrement * count} `;
            return buildProgString(acc, count + 1);
        };
        const startString = '';
        const startAcc = 0;
        const questionStr = buildProgString(startString, startAcc);
        //----------
        return makeGameData(questionStr, correctAnswerStr); // game structure for engine
    };
    mainGame(userName, gameGenerator);
};