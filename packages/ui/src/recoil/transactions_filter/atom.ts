/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { atom } from 'recoil';
import type { AtomState } from '@/recoil/transactions_filter/types';

const initialState: AtomState = {
  filter: '{}',
  openDialog: false,
  selectedMsgTypes: [],
};

export const atomState = atom<AtomState>({
  key: 'txsFilter',
  default: initialState,
});
