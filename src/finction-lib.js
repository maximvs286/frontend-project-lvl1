import { cons, car, cdr } from '@hexlet/pairs';

// randomize function 
export const randomInteger = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

// structure for randomize function
export const makeGameData = (quesion, correctAnswer) => cons(quesion, correctAnswer);
export const getQuestion = gameData => car(gameData);
export const getCorrectAnswer = gameData => cdr(gameData);