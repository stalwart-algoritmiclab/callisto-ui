/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { atomFamily } from 'recoil';
import type { AtomState } from '@/recoil/validators/types';

const initialState: AtomState = null;

export const atomFamilyState = atomFamily<AtomState, string>({
  key: 'validator',
  default: initialState,
});
