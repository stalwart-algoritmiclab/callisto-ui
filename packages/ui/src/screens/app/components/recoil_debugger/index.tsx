/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

/* eslint-disable */
import { useEffect } from 'react';
import { useRecoilSnapshot } from 'recoil';

function DebugObserver() {
  const snapshot = useRecoilSnapshot();

  useEffect(() => {
    console.log('The following atoms were modified:');
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.log(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
}

export default DebugObserver;
