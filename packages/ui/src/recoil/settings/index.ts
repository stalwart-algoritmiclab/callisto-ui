/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

export { atomState } from '@/recoil/settings/atom';
export { useSettingsRecoil } from '@/recoil/settings/hooks';
export {
  readDate,
  readTimeFormat,
  readTheme,
  readTx,
  writeDate,
  writeTimeFormat,
  writeTheme,
  writeTx,
} from '@/recoil/settings/selectors';
export type { AtomState, Date, Theme, Tx, TimeFormat } from '@/recoil/settings/types';
export {
  DATE_LIST,
  getThemeTemplate,
  THEME_DICTIONARY,
  THEME_LIST,
  TX_LIST,
  TIME_FORMAT_LIST,
} from '@/recoil/settings/utils';
