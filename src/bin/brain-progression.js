#!/usr/bin/env node

import { askUserName, askQ, greeting } from '../index';

greeting('progression');

askUserName();

askQ('progression', 0);