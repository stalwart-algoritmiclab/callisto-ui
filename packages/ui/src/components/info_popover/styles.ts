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
  },
  icon: {
    display: 'inline-block',
    fontSize: '1rem',
    margin: theme.spacing(0, 0.5),
  },
  popover: {
    pointerEvents: 'none',
    '& .MuiPopover-paper': {
      padding: '1rem',
      maxWidth: '300px',
    },
  },
}));

export default useStyles;
