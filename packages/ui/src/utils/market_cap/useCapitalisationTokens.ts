import { useMemo } from 'react';

import numeral from 'numeral';

import { convertCoinFromCustomDecimal } from '../formatting';

import { useBalance } from './useBalance';
import { useGetModulesAddress } from './useGetModulesAddress';
import { useRatesAll } from './useRatesAll';

type Tokens = {
  amount: string;
  convertedAmount: number;
  creator: string;
  decimals: number;
  denom: string;
  rate: number;
  valueInRate: number;
};

type Capitalization = () => {
  tokens: Tokens[];
  capitalisation: number;
};

export const useCapitalisationTokens: Capitalization = () => {
  try {
    const moduleAddress = useGetModulesAddress();
    const exchangerAddress =
      moduleAddress.exchanger ?? process.env.EXT_PUBLIC_EXCHANGE_MODULE_ADDRESS;
    const { balances } = useBalance(exchangerAddress);
    const assets = balances.assets || [];
    const ratesAll = useRatesAll();

    const { tokens, capitalisation } = useMemo(() => {
      if (!assets.length || !ratesAll.length) return { tokens: [], capitalisation: 0 };

      const filteredAssets = assets.filter(
        (asset) => !['stw', 'ssc', 'stwart'].includes(asset.denom)
      );

      const ratesMap = ratesAll.reduce((acc, rate) => {
        acc[rate.denom] = rate;
        return acc;
      }, {});

      const tokens = filteredAssets.map((asset) => {
        const rate = ratesMap[asset.denom] || {};
        const convertedAmount = convertCoinFromCustomDecimal(asset.amount, rate.decimals || 0);
        const valueInRate = numeral(convertedAmount)
          .multiply(rate.rate || 1)
          .value();

        return {
          ...asset,
          ...rate,
          convertedAmount,
          valueInRate,
        };
      });

      const capitalisation = tokens.reduce((sum, token) => sum + token.valueInRate, 0);

      return { tokens, capitalisation };
    }, [assets, ratesAll]);

    return { tokens, capitalisation };
  } catch (error) {
    console.error('Error fetching capitalisation tokens:', error);
    return { tokens: [], capitalisation: 0 };
  }
};
