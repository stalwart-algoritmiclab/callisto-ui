/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { act, cleanup, renderHook } from '@testing-library/react';
import { useOverview } from '@/screens/account_details/components/overview/hooks';

jest.mock('react-toastify', () => ({
  toast: jest.fn(),
}));

jest.mock('copy-to-clipboard', () => ({
  copy: jest.fn(),
}));

describe('hook: useOverview', () => {
  test('handles open correctly', () => {
    const { result } = renderHook(() => useOverview());
    expect(result.current.open).toBe(false);

    act(() => result.current.handleOpen());
    expect(result.current.open).toBe(true);
  });

  test('handles close correctly', () => {
    const { result } = renderHook(() => useOverview());
    expect(result.current.open).toBe(false);

    act(() => result.current.handleOpen());
    expect(result.current.open).toBe(true);

    act(() => result.current.handleClose());
    expect(result.current.open).toBe(false);
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
