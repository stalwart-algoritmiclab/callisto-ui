/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Big from 'big.js';
import { type AtomState } from '@/recoil/market';
import { formatNumber } from '@/utils/format_token';
import { useCapitalisationTokens } from '@/utils';
// import { useBalance } from '@/utils/market_cap';

export const formatMarket = (data: AtomState) => {
  const exludedItems = [null, 0];
  const { capitalisation } = useCapitalisationTokens();
  const marketCap = capitalisation
    ? `$${formatNumber(capitalisation.toString() ?? '', 2)}`
    : exludedItems.includes(data.marketCap)
    ? 'N/A'
    : `$${formatNumber(data.marketCap?.toString() ?? '', 2)}`;

  return [
    {
      key: 'marketCap',
      data: marketCap,
    },
    {
      key: 'supply',
      data: `${formatNumber(data.supply.value, 2)} ${data.supply.displayDenom.toUpperCase()}`,
    },
    {
      key: 'STW Price',
      data: `$0.3`,
    },
    {
      key: 'communityPool',
      data: `${formatNumber(
        data.communityPool.value,
        2
      )} ${data.communityPool.displayDenom.toUpperCase()}`,
    },
  ];
};
