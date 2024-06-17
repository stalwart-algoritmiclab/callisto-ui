/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { ApolloClient, from, InMemoryCache } from '@apollo/client';
import { jest } from '@jest/globals';

export const mockClient = new ApolloClient({ link: from([]), cache: new InMemoryCache() });

function mockApollo() {
  const useApolloClient = jest.fn(() => mockClient);
  jest.mock('@apollo/client', () => ({
    ...jest.requireActual<object>('@apollo/client'),
    useApolloClient,
  }));
}

export default mockApollo;
