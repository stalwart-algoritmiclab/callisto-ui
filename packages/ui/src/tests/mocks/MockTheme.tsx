/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import createCache, { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import { defaultTheme } from '@/styles';

let appCache: EmotionCache | undefined;

export const createAppCache = () => {
  appCache = createCache({
    key: 'css',
  });
  return appCache;
};

/**
 * Theme mocker to handle custom keys
 */
const MockTheme = ({ children }: { children: ReactNode }) => (
  <CacheProvider value={appCache ?? createAppCache()}>
    <ThemeProvider theme={createTheme(defaultTheme)}>
      <RecoilRoot>{children}</RecoilRoot>
    </ThemeProvider>
  </CacheProvider>
);

export default MockTheme;
