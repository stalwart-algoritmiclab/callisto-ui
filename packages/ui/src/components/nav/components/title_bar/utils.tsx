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
    // {
    //   key: 'inflation',
    //   data: `${formatNumber(Big(data.inflation)?.times(100).toPrecision(), 0)}%`,
    // },
    // {
    //   key: 'apr',
    //   data: `${formatNumber(Big(data.apr)?.times(100).toPrecision(), 2)}%`,
    // },
    {
      key: 'supply',
      data: `${formatNumber(data.supply.value, 2)} ${data.supply.displayDenom.toUpperCase()}`,
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
