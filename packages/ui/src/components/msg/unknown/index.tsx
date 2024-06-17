/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { FC } from 'react';
import useStyles from '@/components/msg/unknown/styles';
import { type MsgUnknown } from '@/models';

const Unknown: FC<{ message: MsgUnknown }> = (props) => {
  const { message } = props;

  const { classes } = useStyles();
  return (
    <pre className={classes.root}>
      <code>{JSON.stringify(message.json, null, '\t')}</code>
    </pre>
  );
};

export default Unknown;
