/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import NotFoundDark from 'shared-utils/assets/not-found-dark.svg';
import NotFoundLight from 'shared-utils/assets/not-found-light.svg';
import { readTheme } from '@/recoil/settings';
import useStyles from '@/components/no_data/styles';

const NoData: FC<ComponentDefault> = ({ className }) => {
  const { classes, cx } = useStyles();
  const { t } = useAppTranslation('common');
  const theme = useRecoilValue(readTheme);

  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.content}>
        {theme === 'light' ? <NotFoundLight /> : <NotFoundDark />}
        <Typography variant="body1">{t('nothingToShow')}</Typography>
      </div>
    </div>
  );
};

export default NoData;
