/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { FC } from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import useStyles from '@/components/nav/components/theme_toggle/styles';
import useThemeToggle from '@/components/nav/components/theme_toggle/hooks';

type ToggleProps = {
  className?: string;
};

const ThemeToggle: FC<ToggleProps> = ({ className }) => {
  const { theme, themeChange, disabled } = useThemeToggle();
  const { classes, cx } = useStyles();
  const { t } = useAppTranslation('common');
  return (
    <Box>
      <Switch
        className={cx(classes.switch, className)}
        disabled={disabled}
        onChange={themeChange}
        value={theme}
      />
      <Typography variant="caption" className={classes.caption}>
        {t(theme)}
      </Typography>
    </Box>
  );
};

export default ThemeToggle;
