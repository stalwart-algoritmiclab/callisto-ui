/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { useState } from 'react';

export const useTransactionsFilter = (callback: (value: string) => void) => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleSelect = (selected: { key: string }) => {
    const newSelectedFilter = selected.key === 'none' ? '' : selected.key;
    setSelectedFilter(newSelectedFilter);
    if (callback) {
      callback(selected.key);
    }
  };

  return {
    handleSelect,
    selectedFilter,
  };
};
