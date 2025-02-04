/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

export interface OverviewType {
  hash: string;
  height: number;
  timestamp: string;
  fee: TokenUnit;
  gasUsed: number;
  gasWanted: number;
  success: boolean;
  memo: string;
  error: string;
}

export interface TransactionState {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
  logs: null | [];
  messages: {
    filterBy: string;
    viewRaw: boolean;
    items: unknown[];
  };
}
