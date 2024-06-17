/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

export interface ValidatorType {
  validator: string;
  votingPower: number;
  votingPowerPercent: number;
  commission: number;
  condition: number;
  status: number;
  jailed: boolean;
  tombstoned: boolean;
  topVotingPower?: boolean; // top 34% VP
}

export interface ValidatorsState {
  loading: boolean;
  exists: boolean;
  tab: number;
  sortKey: string;
  sortDirection: 'asc' | 'desc';
  votingPowerOverall: number;
  items: ValidatorType[];
}

export type ItemType = Override<ValidatorType, { validator: AvatarName }>;
