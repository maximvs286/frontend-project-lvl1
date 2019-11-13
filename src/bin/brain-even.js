#!/usr/bin/env node

import { askQ, readName } from '../../dist/index';

console.log('\nWelcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

readName();

askQ(0);
