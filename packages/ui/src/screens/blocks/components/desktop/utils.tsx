/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

export const columns: {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'height',
    width: 15,
  },
  {
    key: 'proposer',
    width: 25,
  },
  {
    key: 'hash',
    width: 25,
  },
  {
    key: 'txs',
    align: 'right',
    width: 15,
  },
  {
    key: 'time',
    align: 'right',
    width: 20,
  },
];
