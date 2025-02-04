/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    background: theme.palette.background.default,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: theme.spacing(3),
  },
  actions: {
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 5000,
  },
  searchBar: {
    flex: 1,
    marginRight: theme.spacing(2),
    '&.open': {
      '& .MuiInputBase-root': {
        background: theme.palette.background.default,
      },
    },
  },
  network: {
    marginRight: theme.spacing(2),
    '&.open': {
      background: theme.palette.background.default,
    },
  },
  toggle: {
    marginRight: theme.spacing(2),
  },
  networkList: {
    width: '100%',
    zIndex: 1201,
    opacity: 0,
    visibility: 'hidden',
    transition: '0.2s ease-in-out',
    position: 'fixed',
    top: 0,
    left: 0,
    '&.open': {
      opacity: 1,
      visibility: 'visible',
    },
  },
}));

export default useStyles;
