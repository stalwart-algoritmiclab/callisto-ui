/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import chainConfig from '@/chainConfig';
import { OnlineVotingPowerQuery, useOnlineVotingPowerQuery } from '@/graphql/types/general_types';
import { formatToken } from '@/utils/format_token';

import numeral from 'numeral';

import * as R from 'ramda';

import { useCallback, useState } from 'react';

const { votingPowerTokenUnit } = chainConfig();

type OnlineVotingPowerState = {
  votingPower: number;
  totalVotingPower: number;
  activeValidators: number;
};

const initialState: OnlineVotingPowerState = {
  votingPower: 0,
  totalVotingPower: 0,
  activeValidators: 0,
};

const formatOnlineVotingPower = (data: OnlineVotingPowerQuery) => {
  const votingPower =
    numeral(data?.validatorVotingPowerAggregate?.aggregate?.sum?.votingPower)
      .divide(Math.pow(10, Number(process.env.NEXT_PUBLIC_DECIMAL)))
      .value() ?? 0;
  const bonded = data?.stakingPool?.[0]?.bonded ?? 0;
  const activeValidators = data?.activeTotal?.aggregate?.count ?? 0;

  return {
    activeValidators,
    votingPower,
    totalVotingPower: numeral(formatToken(bonded, votingPowerTokenUnit).value).value() ?? 0,
  };
};

export const useOnlineVotingPower = () => {
  const [onlineVPstate, setOnlineVPState] = useState(initialState);

  const handleSetState = useCallback(
    (stateChange: (prevState: OnlineVotingPowerState) => OnlineVotingPowerState) => {
      setOnlineVPState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  useOnlineVotingPowerQuery({
    onCompleted: (data) => {
      handleSetState((prevState) => ({
        ...prevState,
        ...formatOnlineVotingPower(data),
      }));
    },
  });

  return {
    onlineVPstate,
  };
};
