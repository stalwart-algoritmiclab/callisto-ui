/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

export interface OverviewType {
  height: number;
  hash: string;
  txs: number;
  timestamp: string;
  proposer: string;
  // votingPower: number;
}

export interface BlockDetailState {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
  signatures: string[];
  transactions: Transactions[];
}
