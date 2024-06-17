/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import type { act } from 'react-test-renderer';

/**
 * helper test util to wait for the dom to update
 * before asserting tests
 * @param ms
 */
const wait = async (rendererAct: typeof act, ms = 50) => {
  await rendererAct(
    () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(), ms);
      })
  );
};

export default wait;
