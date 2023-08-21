#!/usr/bin/env node
import { getDescription, getRoundData } from '../src/games/getDataForBrainEven.js';
import engine from '../src/index.js';

engine(getDescription(), getRoundData);
