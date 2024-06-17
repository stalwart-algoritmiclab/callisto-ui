/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: theme.palette.custom.fonts.fontTwo,
    '& svg': {
      width: '16px',
      height: '16px',
      marginRight: theme.spacing(0.5),
    },
  },
  success: {
    '& .MuiSvgIcon-root': {
      fill: theme.palette.custom.results.pass,
    },
  },
  fail: {
    '& .MuiSvgIcon-root': {
      fill: theme.palette.custom.results.fail,
    },
  },
}));

export default useStyles;
