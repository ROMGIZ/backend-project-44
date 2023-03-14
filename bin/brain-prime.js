#!/usr/bin/env node

import { getDescription, getRoundData } from '../src/games/getDataForBrainPrime.js';
import engine from '../src/index.js';

engine(getDescription(), getRoundData);