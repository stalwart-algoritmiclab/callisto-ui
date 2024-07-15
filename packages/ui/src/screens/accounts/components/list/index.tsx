import Box from '@/components/box';
import LoadAndExist from '@/components/load_and_exist';
import Loading from '@/components/loading';
import Pagination from '@/components/pagination';
import { useProfilesRecoil } from '@/recoil/profiles/hooks';
import { useAccounts } from '@/screens/accounts/components/list/hooks';
import useStyles from '@/screens/accounts/components/list/styles';
import useAppTranslation from '@/hooks/useAppTranslation';
import dynamic from 'next/dynamic';
import React, { ComponentProps, useCallback, useMemo } from 'react';

const Desktop = dynamic(() => import('@/screens/accounts/components/list/components/desktop'));
const Mobile = dynamic(() => import('@/screens/accounts/components/list/components/mobile'));

type Props = {
  className?: string;
};

const List: React.FC<Props> = ({ className }) => {
  const { classes, cx } = useStyles();
  const { t } = useAppTranslation('top_accounts');
  const { items, loading, exists, page, setPage, rowsPerPage, totalAccounts } = useAccounts();
  const addresses = useMemo(() => items?.map((x) => x.address ?? '') ?? [], [items]);
  const dataProfiles = useProfilesRecoil(addresses).profiles;
  const mergedDataWithProfiles = useMemo(
    () =>
      items?.map((x, i) => ({
        ...x,
        Account: dataProfiles[i],
      })),
    [dataProfiles, items]
  );

  const handleChangePage = useCallback<ComponentProps<typeof Pagination>['handlePageChange']>(
    (_, newPage) => setPage(newPage),
    [setPage]
  );

  const totalPages = Math.round(totalAccounts / rowsPerPage);

  const showData = !loading && !!items?.length;

  return (
    <LoadAndExist loading={loading} exists={totalAccounts}>
      <Box className={cx(className, classes.root)}>
        <div className={classes.refreshDelayNotice}>{t('refresh_delay_notice')}</div>
        {!showData && <Loading />}
        <Desktop className={classes.desktop} items={mergedDataWithProfiles} />
        <Mobile className={classes.mobile} items={mergedDataWithProfiles} />
        {showData && (
          <Pagination
            className={classes.paginate}
            total={totalAccounts}
            rowsPerPage={rowsPerPage}
            page={page}
            totalPages={totalPages}
            handlePageChange={handleChangePage}
          />
        )}
      </Box>
    </LoadAndExist>
  );
};

export default List;
