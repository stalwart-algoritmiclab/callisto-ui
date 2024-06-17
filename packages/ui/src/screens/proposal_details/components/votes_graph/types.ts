/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

export interface VotesType {
  yes: TokenUnit;
  no: TokenUnit;
  abstain: TokenUnit;
  veto: TokenUnit;
}
export interface VotesGraphState {
  votes: VotesType;
  bonded: TokenUnit;
  quorum: string;
}
