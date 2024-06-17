/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

export interface OverviewType {
  validator: string;
  operatorAddress: string;
  selfDelegateAddress: string;
  description: string;
  website: string;
}

export interface StatusType {
  inActiveSet?: string;
  jailed: boolean;
  tombstoned: boolean;
  commission: number;
  signedBlockWindow: number;
  missedBlockCounter: number;
  maxRate: string;
  status: number;
  condition: number;
}

export interface VotingPowerType {
  height: number;
  overall: TokenUnit;
  self: number;
  validatorStatus: number;
}

export interface ValidatorVPState {
  validatorVPExists: boolean;
  votingPower: VotingPowerType;
}

export interface ValidatorOverviewState {
  exists: boolean;
  overview: OverviewType;
  status: StatusType;
}

export interface ValidatorProfileState {
  exists: boolean;
  desmosProfile: DesmosProfile | null;
  operatorAddress: string;
  selfDelegateAddress: string;
}
