import { useInfiniteQuery } from '@tanstack/react-query';

import { useMemo } from 'react';

import { useClient } from '../useTsClient';

type Rate = {
  creator: string;
  decimals: number;
  denom: string;
  rate: number;
};
type Rates = () => Rate[];

export default function useStwartchainRates() {
  const client = useClient();

  const QueryRatesAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryRatesAll', query };
    return useInfiniteQuery(
      [key],
      ({ pageParam = 1 }: { pageParam?: number }) => {
        const { query } = key;

        query['pagination.limit'] = perPage;
        query['pagination.offset'] = (pageParam - 1) * perPage;
        query['pagination.count_total'] = true;
        return client.StwartchainRates.query
          .queryRatesAll(query ?? undefined)
          .then((res) => ({ ...res.data, pageParam }));
      },
      {
        ...options,
      }
    );
  };

  return { QueryRatesAll };
}

export const useRatesAll: Rates = () => {
  let initialRate = [
    {
      creator: '',
      decimals: 0,
      denom: '',
      rate: 0,
    },
  ];
  try {
    const { QueryRatesAll } = useStwartchainRates();

    const query = QueryRatesAll(
      {
        'pagination.limit': '100',
        'pagination.offset': '0',
      },
      {},
      100
    );
    type HelperRates = NonNullable<NonNullable<Required<typeof query.data>>['pages'][0]['rates']>;
    const ratesRaw = query.data?.pages.reduce((rate, page) => {
      if (page.rates) {
        return rate.concat(page.rates);
      } else {
        return rate;
      }
    }, [] as HelperRates);

    const ratesAll = useMemo(() => {
      return ratesRaw ?? initialRate;
    }, [query]);
    return ratesAll;
  } catch (error) {
    console.error(error);
    return initialRate;
  }
};
