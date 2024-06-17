/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { usePrice } from '@/screens/home/components/hero/components/token_price/hooks';
import useStyles from '@/screens/home/components/hero/components/token_price/styles';
import type { TokenPriceType } from '@/screens/home/components/hero/types';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';

const TokenPrice: FC<{ items: TokenPriceType[] }> = (props) => {
  const { classes, theme } = useStyles();
  const { t } = useAppTranslation('home');
  const { chartRef } = usePrice(props.items, theme);

  return (
    <div>
      <Typography variant="h2">{t('priceHistory')}</Typography>
      <div ref={chartRef} className={classes.chart} />
    </div>
  );
};

export default TokenPrice;
