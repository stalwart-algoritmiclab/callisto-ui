import { useInfiniteQuery } from '@tanstack/react-query';

import { useMemo } from 'react';

import { useClient } from '../useTsClient';

export default function useCosmosBankV1Beta1() {
  const client = useClient();

  const QueryAllBalances = (address: string, query: any, options: any, perPage: number) => {
    const key = { type: 'QueryAllBalances', address, query };
    return useInfiniteQuery(
      [key],
      ({ pageParam = 1 }: { pageParam?: number }) => {
        const { address, query } = key;

        query['pagination.limit'] = perPage;
        query['pagination.offset'] = (pageParam - 1) * perPage;
        query['pagination.count_total'] = true;
        return client.CosmosBankV1Beta1.query
          .queryAllBalances(address, query ?? undefined)
          .then((res) => ({ ...res.data, pageParam }));
      },
      {
        ...options,
      }
    );
  };

  return {
    QueryAllBalances,
  };
}

type Balance = (address: string) => {
  balances: {
    assets: {
      denom: string;
      amount: string;
    }[];
    isLoading: boolean;
  };
};

export const useBalance: Balance = (address = '') => {
  let initialBalance = {
    balances: {
      assets: [
        {
          denom: '',
          amount: '0',
        },
      ],
      isLoading: false,
    },
  };
  try {
    const { QueryAllBalances } = useCosmosBankV1Beta1();
    const enabled = useMemo(() => {
      return address !== '';
    }, [address]);
    const query = QueryAllBalances(address, {}, { enabled }, 1000);
    type HelperBalances = NonNullable<
      NonNullable<Required<typeof query.data>>['pages'][0]['balances']
    >;

    const balancesRaw = query.data?.pages.reduce((bals, page) => {
      if (page.balances) {
        return bals.concat(page.balances);
      } else {
        return bals;
      }
    }, [] as HelperBalances);

    const balances = useMemo(() => {
      return {
        assets: balancesRaw ?? [],
        isLoading: query.isLoading,
      };
    }, [balancesRaw]);

    return {
      balances,
    };
  } catch (error) {
    console.error(error);
    return initialBalance;
  }
};
