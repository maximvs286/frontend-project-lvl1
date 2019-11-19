#!/usr/bin/env node

import { askUserName, askQ, greeting } from '../index';

greeting('calc');

askUserName();

askQ('calc', 0);