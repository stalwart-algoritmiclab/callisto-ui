/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { atomState } from '@/recoil/transactions_filter/atom';
import type { AtomState } from '@/recoil/transactions_filter/types';

const isClient = typeof window === 'object';

export const useTxsFilterRecoil = () => {
  const [txsFilter, setTxsFilter] = useRecoilState(atomState);

  useEffect(() => {
    if (isClient) {
      const initTxsFilter: AtomState = {
        filter: '{}',
        openDialog: false,
        selectedMsgTypes: [],
      };
      setTxsFilter(initTxsFilter);
    }
  }, [setTxsFilter, txsFilter.filter, txsFilter.openDialog, txsFilter.selectedMsgTypes]);
};
