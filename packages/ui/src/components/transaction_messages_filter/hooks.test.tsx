/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { act, cleanup, renderHook } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useTransactionsFilter } from '@/components/transaction_messages_filter/hooks';

const callback = jest.fn();

describe('hook: useTransactionsFilter', () => {
  test('handles filter selection correctly', () => {
    const { result } = renderHook(() => useTransactionsFilter(callback), {
      wrapper: RecoilRoot,
    });

    act(() => result.current.handleSelect({ key: 'height' }));
    expect(result.current.selectedFilter).toEqual('height');
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
