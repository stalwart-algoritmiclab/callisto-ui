/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { useEffect, useState } from 'react';

const isClient = typeof window === 'object';

export const useWindowOrigin = () => {
  const [location, setLocation] = useState<string>('');

  useEffect(() => {
    if (!isClient) return;
    setLocation(window.location.origin);
  }, []);

  return { location };
};
