/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import configFromPreset from 'jest-presets/jest/node/jest-preset';
import nextJest from 'next/jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import tsconfig from './tsconfig.json';

/* Creating a jest configuration for nextjs. */
const createJestConfig = nextJest({
  dir: './',
})(configFromPreset);

const exportFunc = async () => {
  // Create Next.js jest configuration
  const configFromNext = await createJestConfig();
  Object.keys(configFromNext.moduleNameMapper).forEach((regExp) => {
    if (new RegExp(regExp).test('_.svg')) {
      configFromNext.moduleNameMapper[regExp] = 'shared-utils/__mocks__/svg.js';
    }
  });
  // moduleNameMapper overrided by nextjs, so we need to add it here.
  const finalConfig = {
    ...configFromNext,
    moduleNameMapper: {
      ...configFromNext.moduleNameMapper,
      ...pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
        prefix: '<rootDir>/src/',
      }),
    },
  };
  return finalConfig;
};

export default exportFunc;
