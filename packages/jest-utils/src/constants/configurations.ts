import type { Config } from '@jest/types';

export const DEFAULT_ONLY_CHANGED: boolean = false;
export const DEFAULT_ISOLATED_MODULES: boolean = true;
export const DEFAULT_CACHE: boolean = true;
export const DEFAULT_WATCH: boolean = false;
export const DEFAULT_MAX_CONCURRENCY: number = 1;
export const DEFAULT_MAX_WORKERS: string | number = 1;
export const DEFAULT_BAIL: number = 1;
export const DEFAULT_VERBOSE: boolean = true;
export const DEFAULT_DISPLAY_NAME: string = 'JEST';
export const DEFAULT_PRESET: string = 'jest-preset-angular';
export const DEFAULT_TS_JEST_IGNORE_CODES: string[] = ['6059'];
export const DEFAULT_MODULE_PATH_IGNORE_PATTERS: string[] = ['.cache', 'dist'];
export const DEFAULT_TEST_PATH_IGNORE_PATTERS: string[] = ['/node_modules/', '/dist/', '/e2e/'];
export const DEFAULT_CACHE_DIR: string = '<rootDir>/.cache';
export const DEFAULT_COVERAGE_REPORTS: Config.CoverageReporters = ['html', 'lcov', 'json', 'text', 'lcov', 'clover'];
