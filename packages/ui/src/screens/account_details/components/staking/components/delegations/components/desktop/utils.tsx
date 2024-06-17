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
    key: 'validator',
    width: 25,
  },
  {
    key: 'amount',
    width: 25,
    align: 'right',
  },
  {
    key: 'commission',
    width: 25,
    align: 'right',
  },
  {
    key: 'reward',
    width: 25,
    align: 'right',
  },
];
