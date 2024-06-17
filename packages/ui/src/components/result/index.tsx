/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import useStyles from '@/components/result/styles';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';

type ResultProps = {
  className?: string;
  success?: boolean;
};

const Result: FC<ResultProps> = ({ className, success }) => {
  const { t } = useAppTranslation('common');
  const { classes, cx } = useStyles();

  return (
    <span
      className={cx(classes.root, className, {
        [classes.success]: success,
        [classes.fail]: !success,
      })}
    >
      {success ? (
        <>
          <CheckCircleIcon />
          <Typography component="span" variant="body1">
            {t('success')}
          </Typography>
        </>
      ) : (
        <>
          <CancelIcon />
          <Typography component="span" variant="body1">
            {t('fail')}
          </Typography>
        </>
      )}
    </span>
  );
};

export default Result;
