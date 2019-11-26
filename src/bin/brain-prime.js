#!/usr/bin/env node

import { askUserName, askQ, greeting } from '../index';

const game = 'prime';
const gameAcc = 0;

greeting(game);

const userName = askUserName();

askQ(game, userName, gameAcc);