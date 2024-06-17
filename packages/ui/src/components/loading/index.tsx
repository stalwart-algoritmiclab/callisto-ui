/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import CircularProgress from '@mui/material/CircularProgress';
import { FC } from 'react';
import useStyles from '@/components/loading/styles';

const Loading: FC<ComponentDefault> = ({ className }) => {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.root, className)}>
      <CircularProgress disableShrink />
    </div>
  );
};

export default Loading;
