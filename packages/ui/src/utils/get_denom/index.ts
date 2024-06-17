/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import chainConfig from '@/chainConfig';

const { primaryTokenUnit } = chainConfig();

/**
 * Helper Function to get Denom from a list
 * @param denom The denom you wish to convert to
 * @param value The value in base denom value
 */
export const getDenom = (list: MsgCoin[] = [], denom = primaryTokenUnit): MsgCoin => {
  const [selectedDenom] = list.filter((x) => x.denom === denom);
  let results: MsgCoin = {
    denom,
    amount: '0',
  };
  if (selectedDenom) {
    results = {
      denom: selectedDenom?.denom ?? '',
      amount: selectedDenom?.amount ?? '0',
    };
  }
  return results;
};
