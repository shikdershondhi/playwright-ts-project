// utils/env.ts
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

const envFile = `.env.${process.env.NODE_ENV || 'dev'}`;
dotenv.config({ path: path.resolve(__dirname, '../env', envFile) });

export const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

const testDataPath = path.resolve(__dirname, `../fixtures/${process.env.NODE_ENV || 'dev'}.json`);
export const TEST_DATA = JSON.parse(fs.readFileSync(testDataPath, 'utf-8'));
