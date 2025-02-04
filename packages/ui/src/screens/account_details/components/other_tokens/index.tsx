/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Box from '@/components/box';
import Pagination from '@/components/pagination';
import { usePagination } from '@/hooks/use_pagination';
import useShallowMemo from '@/hooks/useShallowMemo';
import Desktop from '@/screens/account_details/components/other_tokens/components/desktop';
import Mobile from '@/screens/account_details/components/other_tokens/components/mobile';
import useStyles from '@/screens/account_details/components/other_tokens/styles';
import type { OtherTokenType } from '@/screens/account_details/types';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC, useMemo } from 'react';
import Loading from '@/components/loading';

type OtherTokensProps = {
  className?: string;
  otherTokens: {
    data: OtherTokenType[];
    count: number;
  };
  loading: boolean;
};

const OtherTokens: FC<OtherTokensProps> = ({ className, otherTokens, loading }) => {
  const { t } = useAppTranslation('accounts');
  const { classes } = useStyles();
  const display = useDisplayStyles().classes;
  const { page, rowsPerPage, handlePageChange, handleRowsPerPageChange, sliceItems } =
    usePagination({});

  const dataMemo = useShallowMemo(otherTokens.data);
  const items = useMemo(() => sliceItems(dataMemo), [dataMemo, sliceItems]);

  const count = dataMemo.length;
  if (!dataMemo.length) {
    return null;
  }

  return (
    <Box className={className}>
      <Typography variant="h2">{t('otherTokens')}</Typography>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Desktop className={display.hiddenUntilLg} items={items} />
          <Mobile className={display.hiddenWhenLg} items={items} />
          <Pagination
            className={classes.paginate}
            total={count}
            rowsPerPage={rowsPerPage}
            page={page}
            handlePageChange={handlePageChange}
            handleRowsPerPageChange={handleRowsPerPageChange}
            rowsPerPageOptions={[10, 25, 50, 100]}
          />
        </>
      )}
    </Box>
  );
};

export default OtherTokens;
