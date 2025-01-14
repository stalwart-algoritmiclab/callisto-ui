/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Color from 'color';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    '& .MuiListItemIcon-root': {
      minWidth: '48px',
    },
    '&.MuiListItem-gutters': {
      padding: theme.spacing(2, 2.5),
    },
    '& .MuiListItemText-root': {
      color: theme.palette.custom.general.icon,
    },
    '&.active': {
      background: Color(theme.palette.background.paper).lighten(0.5).string(),
      '& .MuiListItemIcon-root': {
        '& svg': {
          fill: theme?.palette?.primary?.main,
          color: theme?.palette?.primary?.main,
        },
      },
      '& .MuiListItemText-root': {
        color: theme.palette.primary.main,
      },
    },
  },
  listItemText: {
    '&& *': {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
}));

export default useStyles;
