/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { CSSObject } from '@emotion/react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    ...(theme.mixins.layout as CSSObject),
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'min-content min-content auto',
    gap: theme.spacing(1),
    [theme.breakpoints.up('lg')]: {
      gap: theme.spacing(2),
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
  overview: {
    [theme.breakpoints.up('lg')]: {
      gridColumn: '1 / 4',
    },
  },
  deposits: {
    [theme.breakpoints.up('lg')]: {
      gridColumn: '1 / 4',
    },
  },
  votes: {
    [theme.breakpoints.up('lg')]: {
      gridColumn: '1 / 4',
    },
  },
  votesGraph: {
    [theme.breakpoints.up('md')]: {
      gridColumn: '1 / 2',
    },
    [theme.breakpoints.up('lg')]: {
      gridColumn: '1 / 4',
      height: 'auto',
    },
  },
}));

export default useStyles;
