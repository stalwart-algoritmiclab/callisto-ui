/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';

type TotalProps = {
  className?: string;
  total: string;
};

const Total: FC<TotalProps> = ({ className, total }) => {
  const { t } = useAppTranslation('proposals');
  return (
    <Typography variant="body1" className={className}>
      {t('totalProposals', {
        amount: total,
      })}
    </Typography>
  );
};

export default Total;
