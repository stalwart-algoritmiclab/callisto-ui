/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { useCallback, useState } from 'react';

export const useDesmosProfile = () => {
  const [connectionsOpen, setConnectionsOpen] = useState(false);

  const handleConnectionsOpen = useCallback(() => {
    setConnectionsOpen(true);
  }, []);

  const handleConnectionsClose = useCallback(() => {
    setConnectionsOpen(false);
  }, []);

  return {
    connectionsOpen,
    handleConnectionsClose,
    handleConnectionsOpen,
  };
};
