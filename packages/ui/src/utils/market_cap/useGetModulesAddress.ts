/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { useQuery } from '@tanstack/react-query';

import { useMemo } from 'react';

import { useClient } from '../useTsClient';

export default function useStwartchainCore() {
  const client = useClient();

  const QueryModulesAddresses = (options: any) => {
    const key = { type: 'QueryModulesAddresses' };
    return useQuery(
      [key],
      () => {
        return client.StwartchainCore.query.queryModulesAddresses().then((res) => res.data);
      },
      options
    );
  };

  return { QueryModulesAddresses };
}

export const useGetModulesAddress = () => {
  try {
    const { QueryModulesAddresses } = useStwartchainCore();

    const query = QueryModulesAddresses({});
    type KeyValueObject = {
      [key: string]: string;
    };

    const result = query.data?.address.reduce((acc, item) => {
      const [key, value] = item.split(': ').map((str) => str.trim());
      acc[key] = value;
      return acc;
    }, {} as KeyValueObject);

    const moduleAddress = useMemo(() => {
      return result ?? {};
    }, [query]);

    return moduleAddress;
  } catch (error) {
    console.error(error);
  }
};
