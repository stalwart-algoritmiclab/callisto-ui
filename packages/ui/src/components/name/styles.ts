/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    color: theme.palette.custom.fonts.highlight,
    wordBreak: 'break-all',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export default useStyles;
