/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    flexDirection: 'column',
    height: '100%',
  },
  itemWrapper: {
    marginTop: theme.spacing(2),
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  condition: {
    width: '7px',
    height: '7px',
    background: theme.palette.custom.condition.zero,
    marginLeft: theme.spacing(1),
    borderRadius: '50%',
    '&.green': {
      background: theme.palette.custom.condition.one,
    },
    '&.yellow': {
      background: theme.palette.custom.condition.two,
    },
    '&.red': {
      background: theme.palette.custom.condition.three,
    },
  },
}));

export default useStyles;
