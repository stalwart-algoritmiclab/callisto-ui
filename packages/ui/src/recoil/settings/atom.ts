/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { atom } from 'recoil';
import chainConfig from '@/chainConfig';
import type { AtomState } from '@/recoil/settings/types';

const { themes } = chainConfig();

const initialState: AtomState = {
  theme: themes.default as AtomState['theme'],
  dateFormat: 'locale',
  timeFormat: '12-hour',
  txListFormat: 'compact',
};

export const atomState = atom<AtomState>({
  key: 'settings',
  default: initialState,
});
