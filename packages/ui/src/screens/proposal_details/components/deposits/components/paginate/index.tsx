/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { ComponentProps, FC } from 'react';
import Pagination from '@/components/pagination';
import useStyles from '@/screens/proposal_details/components/deposits/components/paginate/styles';

type Properties = 'total' | 'page' | 'rowsPerPage' | 'handlePageChange' | 'handleRowsPerPageChange';
type PaginateProps = Pick<ComponentProps<typeof Pagination>, Properties>;

const Paginate: FC<PaginateProps> = ({
  total,
  page,
  rowsPerPage,
  handlePageChange,
  handleRowsPerPageChange,
}) => {
  const { classes } = useStyles();
  return (
    <Pagination
      className={classes.root}
      total={total}
      rowsPerPage={rowsPerPage}
      page={page}
      handlePageChange={handlePageChange}
      handleRowsPerPageChange={handleRowsPerPageChange}
      rowsPerPageOptions={[10, 25, 50, 100]}
    />
  );
};

export default Paginate;
