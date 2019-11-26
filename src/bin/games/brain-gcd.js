#!/usr/bin/env node

import { askUserName, mainGame, greeting } from '../../index';

const game = 'gcd';
const gameAcc = 0;

greeting(game);

const userName = askUserName();

mainGame(game, userName, gameAcc);