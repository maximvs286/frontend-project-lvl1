#!/usr/bin/env node

import { askUserName, mainGame, greeting } from '../index';

const game = 'even';
const gameAcc = 0;

greeting(game);

const userName = askUserName();

mainGame(game, userName, gameAcc);