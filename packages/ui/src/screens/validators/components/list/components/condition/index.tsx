/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { FC } from 'react';
import useStyles from '@/screens/validators/components/list/components/condition/styles';

const Condition: FC<ComponentDefault> = ({ className }) => {
  const { classes, cx } = useStyles();

  return <div className={cx(classes.root, className)} />;
};

export default Condition;
