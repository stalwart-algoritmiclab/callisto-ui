/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import type { MixinsOptions, Mixins } from '@mui/material/styles/createMixins';

declare module '@mui/material/styles/createMixins' {
  interface MixinsOptions {
    layout?: CSSProperties;
    tableCell?: CSSProperties;
  }

  interface Mixins {
    layout: CSSProperties;
    tableCell: CSSProperties;
  }
}
