/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

export interface VoteType {
  vote: string;
  user: string;
}

export interface VoteCount {
  yes: number;
  no: number;
  veto: number;
  abstain: number;
  didNotVote: number;
}
export interface VoteState {
  data: VoteType[];
  voteCount: VoteCount;
  validatorsNotVoted: VoteType[];
  tab: number;
}

export type ItemType = VoteType;
