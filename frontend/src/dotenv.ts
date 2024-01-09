import { readFileSync } from 'fs';

interface EnvConfig {
    [key: string]: string;
}

const envConfig: string = readFileSync('.env').toString();

const envConfigArray: string[] = envConfig.split('\n');

const envVars: EnvConfig = envConfigArray.reduce((acc: EnvConfig, line: string) => {
    const keyValue: string[] = line.split('=');
    if (keyValue.length === 2) {
        acc[keyValue[0]] = keyValue[1];
    }
    return acc;
}, {});

export const environment: EnvConfig = {
    ...envVars,
};