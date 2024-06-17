/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& .MuiTypography-h2': {
      paddingBottom: theme.spacing(2),
    },
  },
  wrapper: {
    flex: 1,
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
