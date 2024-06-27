/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import {
  LastHundredBlocksSubscription,
  useLastHundredBlocksSubscription,
} from '@/graphql/types/general_types';

import { useRouter } from 'next/router';

import { useState } from 'react';

const formatLastHundredBlocks = (data: LastHundredBlocksSubscription) => {
  return data.block.map((x) => ({
    height: x.height,
    txs: x.transactions.length,
    proposer: x.validator?.validatorInfo?.operatorAddress ?? '',
    signed: x.precommits.length === 1,
  }));
};

type BlocksState = {
  height: number;
  txs: number;
  proposer: string;
  signed: boolean;
}[];

export const useBlocks = (address?: string) => {
  const [state, setState] = useState<BlocksState>([]);

  const router = useRouter();

  const { loading } = useLastHundredBlocksSubscription({
    variables: {
      address: address ?? (router?.query?.address as string) ?? '',
    },
    onData: (data) => {
      if (!data.data.data) return;
      setState(formatLastHundredBlocks(data.data.data));
    },
  });

  return {
    state,
    loading,
  };
};
