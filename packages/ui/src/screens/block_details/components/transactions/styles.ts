/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    minHeight: '500px',
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('lg')]: {
      height: '100%',
    },
  },
  header: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  list: {
    flex: 1,
  },
}));

export default useStyles;
