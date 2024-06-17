/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { FC, ReactNode } from 'react';
import useStyles from '@/components/box/styles';

type BoxProps = {
  className?: string;
  children: ReactNode;
};

const Box: FC<BoxProps> = ({ className, children }) => {
  const { classes, cx } = useStyles();
  return <div className={cx(classes.root, className)}>{children}</div>;
};

export default Box;
