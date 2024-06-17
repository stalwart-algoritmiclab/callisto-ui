/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import LinearProgress from '@mui/material/LinearProgress';
import { FC } from 'react';
import useStyles from '@/components/linear_loading/styles';

const LinearLoading: FC<ComponentDefault> = ({ className }) => {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.root, className)}>
      <LinearProgress />
    </div>
  );
};

export default LinearLoading;
