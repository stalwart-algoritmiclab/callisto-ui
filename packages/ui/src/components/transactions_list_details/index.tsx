/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { FC } from 'react';
import NoData from '@/components/no_data';
import List from '@/components/transactions_list_details/components/list';
import type { TransactionsListDetailsState } from '@/components/transactions_list_details/types';

const TransactionsListDetails: FC<TransactionsListDetailsState> = (props) => {
  // setting fallback values
  const {
    hasNextPage = false,
    isNextPageLoading = false,
    loadNextPage = () => null,
    loadMoreItems = () => null,
    isItemLoaded = () => true,
    itemCount,
    transactions,
  } = props;

  const formatProps: TransactionsListDetailsState = {
    hasNextPage,
    isNextPageLoading,
    isItemLoaded,
    loadNextPage,
    loadMoreItems,
    itemCount,
    transactions,
  };

  if (!itemCount) {
    return <NoData />;
  }

  return <List {...formatProps} />;
};

export default TransactionsListDetails;
