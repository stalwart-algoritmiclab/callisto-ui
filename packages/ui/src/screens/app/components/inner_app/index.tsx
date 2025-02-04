/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import { useChainHealthCheck } from '@/screens/app/components/inner_app/hooks';

function InnerApp({ Component, pageProps }: AppProps) {
  useChainHealthCheck();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} />;
    </AnimatePresence>
  );
}

export default InnerApp;
