/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    overflow: 'auto',
    padding: '1rem',
    margin: '0',
    background: theme.palette.background.default,
    flex: 1,
    '& code': {
      whiteSpace: 'pre-wrap',
    },
  },
}));

export default useStyles;
