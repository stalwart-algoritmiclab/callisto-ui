/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

export interface DepositType {
  amount: TokenUnit;
  user: string;
  timestamp: string;
}

export interface DepositState {
  data: DepositType[];
}

export type ItemType = DepositType;
