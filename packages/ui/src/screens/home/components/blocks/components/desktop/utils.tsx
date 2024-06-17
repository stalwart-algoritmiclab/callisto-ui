/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

export const columns: {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
}[] = [
  {
    key: 'height',
  },
  {
    key: 'proposer',
  },
  {
    key: 'hash',
  },
  {
    key: 'txs',
    align: 'right',
  },
  {
    key: 'time',
    align: 'right',
  },
];
