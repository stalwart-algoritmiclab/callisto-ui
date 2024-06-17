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
    key: 'depositor',
    width: 40,
  },
  {
    key: 'amount',
    width: 30,
    align: 'right',
  },
  {
    key: 'time',
    width: 30,
    align: 'right',
  },
];
