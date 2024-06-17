/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    minWidth: '100vw',
    padding: theme.spacing(6),
    position: 'fixed',
    zIndex: 10000000,
    backgroundColor: theme.palette.background.default,
    '& svg': {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      '& svg': {
        width: '300px',
      },
    },
  },
  logo: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '300px',
    },
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default useStyles;
