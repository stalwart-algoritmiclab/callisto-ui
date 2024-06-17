/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { makeStyles } from 'tss-react/mui';
import Color from 'color';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '18px',
    width: '18px',
  },
  svg: {
    position: 'absolute',
    width: '14px',
    height: '14px',
    right: 0,
    fill: theme.palette.custom.fonts.fontTwo,
  },
  up: {
    transform: 'rotate(180deg)',
    '&.desc': {
      fill: Color(theme.palette.custom.fonts.fontThree).alpha(0.2).string(),
    },
  },
  down: {
    '&.asc': {
      fill: Color(theme.palette.custom.fonts.fontThree).alpha(0.2).string(),
    },
  },
}));

export default useStyles;
