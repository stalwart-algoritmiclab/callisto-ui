/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { useEffect, useState } from 'react';
import { useScreenSize } from '@/hooks/use_screen_size';

export const useDesktop = () => {
  const { isDesktop } = useScreenSize();
  const [isMenu, setMenu] = useState(true);
  const [isNetwork, setNetwork] = useState(false);

  useEffect(() => {
    // if window size shrinks to tablet/mobile we will close any open tabs
    if (!isDesktop) {
      setNetwork(false);
    }
  }, [isDesktop]);

  const toggleMenu = () => {
    setMenu(!isMenu);
  };

  const toggleNetwork = () => {
    setNetwork(!isNetwork);
  };

  /**
   * Helper that will check and turn off any open tabs
   */
  const turnOffAll = () => {
    setNetwork(false);
  };

  return {
    isMenu,
    setMenu,
    toggleMenu,
    toggleNetwork,
    isNetwork,
    turnOffAll,
  };
};
