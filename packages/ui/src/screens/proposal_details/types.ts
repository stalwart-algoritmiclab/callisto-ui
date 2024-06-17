/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

export interface OverviewType {
  title: string;
  id: number;
  proposer: string;
  description: string;
  status: string;
  submitTime: string;
  proposalType: string;
  depositEndTime: string;
  votingStartTime: string | null;
  votingEndTime: string | null;
  content: {
    recipient: string;
    amount: Array<{
      amount: string;
      denom: string;
    }>;
  };
}

export interface ProposalState {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
}
