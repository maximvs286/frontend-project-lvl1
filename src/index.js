import readlineSync from 'readline-sync';

const readName = () => {
    let userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
};

export default readName;