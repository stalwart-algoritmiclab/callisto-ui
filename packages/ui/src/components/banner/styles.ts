/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    '&&': {
      background: theme.palette.background.paper,
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      height: 'max(80px, min(116px, calc(100vw / 7)))',
      '& img': {
        padding: theme.spacing(1),
        maxWidth: '100%',
        objectFit: 'contain',
        zIndex: 1,
        background: theme.palette.background.paper,
      },
    },
  },
}));

export default useStyles;
