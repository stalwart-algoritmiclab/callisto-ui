/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

export interface TransactionType {
  height: number;
  hash: string;
  type: string[];
  success: boolean;
  timestamp: string;
  messages: number;
}

export interface TransactionsState {
  loading: boolean;
  items: TransactionType[];
}
