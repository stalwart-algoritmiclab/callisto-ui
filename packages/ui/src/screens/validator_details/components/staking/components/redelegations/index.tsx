/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Loading from '@/components/loading';
import NoData from '@/components/no_data';
import Pagination from '@/components/pagination';
import { usePagination } from '@/hooks/use_pagination';
import useShallowMemo from '@/hooks/useShallowMemo';
import Desktop from '@/screens/validator_details/components/staking/components/redelegations/components/desktop';
import Mobile from '@/screens/validator_details/components/staking/components/redelegations/components/mobile';
import useStyles from '@/screens/validator_details/components/staking/components/redelegations/styles';
import type { RedelegationsType } from '@/screens/validator_details/components/staking/types';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import { FC, useCallback } from 'react';

type RedelegationsProps = {
  className?: string;
  redelegations: RedelegationsType;
  setPage: (page: number) => void;
};

const Redelegations: FC<RedelegationsProps> = (props) => {
  const { classes } = useStyles();
  const display = useDisplayStyles().classes;
  const { page, rowsPerPage, handlePageChange, handleRowsPerPageChange } = usePagination({});
  const handlePageChangeCallback = useCallback(
    (event: Parameters<typeof handlePageChange>[0], newPage: number) => {
      props.setPage?.(newPage);
      handlePageChange?.(event, newPage);
    },
    [handlePageChange, props]
  );

  const itemsMemo = useShallowMemo(props?.redelegations?.data);

  let component = null;

  if (props.redelegations.error) {
    component = <pre>{props.redelegations.error.message}</pre>;
  } else if (props.redelegations.loading && !itemsMemo?.length) {
    component = <Loading />;
  } else if (!itemsMemo?.length) {
    component = <NoData />;
  } else {
    component = (
      <>
        <Desktop items={itemsMemo} className={display.hiddenUntilLg} />
        <Mobile items={itemsMemo} className={display.hiddenWhenLg} />
      </>
    );
  }

  let total = props.redelegations.count;
  if (total === undefined && props.redelegations.data?.length !== undefined) {
    if (props.redelegations.data.length === rowsPerPage) {
      total = page * rowsPerPage + props.redelegations.data.length + 1;
    } else {
      total = page * rowsPerPage + props.redelegations.data.length;
    }
  }

  return (
    <div className={props.className}>
      {component}
      <Pagination
        className={classes.paginate}
        total={total}
        rowsPerPage={rowsPerPage}
        page={page}
        handlePageChange={handlePageChangeCallback}
        handleRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[rowsPerPage]}
      />
    </div>
  );
};

export default Redelegations;
