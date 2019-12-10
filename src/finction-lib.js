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

//---------- getters for structure ----------

export const getQuestion = (gameData) => gameData('getQuestion');

export const getCorrectAnswer = (gameData) => gameData('getCorrectAnswer');