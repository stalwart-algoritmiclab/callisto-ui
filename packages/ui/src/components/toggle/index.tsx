/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { FC } from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import useStyles from '@/components/toggle/styles';

type ToggleProps = {
  className: string;
  onToggle: () => void;
  placeholder?: string | null;
  disabled?: boolean;
  checked: boolean;
};

const Toggle: FC<ToggleProps> = (props) => {
  const { className, onToggle, placeholder, disabled, checked } = props;
  const { classes } = useStyles({ checked });

  return (
    <Box className={className}>
      {placeholder && (
        <Typography variant="caption" className={classes.caption}>
          {placeholder}
        </Typography>
      )}
      <Switch
        className={classes.toggle}
        onChange={onToggle}
        disabled={disabled}
        checked={checked}
      />
    </Box>
  );
};

export default Toggle;
