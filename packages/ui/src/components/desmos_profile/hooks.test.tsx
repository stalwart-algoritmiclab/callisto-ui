/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { act, cleanup, renderHook } from '@testing-library/react';
import { useDesmosProfile } from '@/components/desmos_profile/hooks';

describe('hook: useDesmosProfile', () => {
  test('handles open connections correctly', () => {
    const { result } = renderHook(() => useDesmosProfile());
    expect(result.current.connectionsOpen).toBe(false);

    act(() => result.current.handleConnectionsOpen());
    expect(result.current.connectionsOpen).toBe(true);
  });

  test('handles close connections correctly', () => {
    const { result } = renderHook(() => useDesmosProfile());
    expect(result.current.connectionsOpen).toBe(false);

    act(() => result.current.handleConnectionsOpen());
    expect(result.current.connectionsOpen).toBe(true);

    act(() => result.current.handleConnectionsClose());
    expect(result.current.connectionsOpen).toBe(false);
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
