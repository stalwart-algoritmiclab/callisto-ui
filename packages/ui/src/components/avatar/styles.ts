/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '28px',
    height: '28px',
    minWidth: '28px',
    minHeight: '28px',
    borderRadius: '50%',
    overflow: 'hidden',
    background: theme.palette.custom.general.surfaceTwo,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center center',
    },
  },
  img: {
    width: 'auto',
    height: 'auto',
  },
}));

export default useStyles;
