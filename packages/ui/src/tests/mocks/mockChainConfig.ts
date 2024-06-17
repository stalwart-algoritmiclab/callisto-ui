/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { jest } from '@jest/globals';

function mockChainConfig() {
  const { default: chainConfig } =
    jest.requireActual<{ default(): { tokenUnits: object } }>('@/chainConfig');
  const config = chainConfig();
  config.tokenUnits = {
    udaric: { display: 'daric', exponent: 6 },
    upotic: { display: 'potic', exponent: 0 },
    ubar: { display: 'bar', exponent: 8 },
    rowan: { display: 'rowan', exponent: 18 },
  };
  jest.mock('@/chainConfig', () => jest.fn(() => config));
}

export default mockChainConfig;
