/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import chainConfig from '@/chainConfig';
import type { Theme } from '@/recoil/settings/types';
import { defaultTheme, isThemeSupported, themeDictionary } from '@/styles';

const { themes } = chainConfig();

// ================================
// CONSTANTS
// ================================
export const THEME_LIST: Theme[] = themes.themeList;

export const THEME_DICTIONARY = themeDictionary;

export const getThemeTemplate = (theme: Theme, fontFamily: string) => {
  if (isThemeSupported(theme)) {
    THEME_DICTIONARY[theme].typography = { ...THEME_DICTIONARY[theme].typography, fontFamily };
    return THEME_DICTIONARY[theme];
  }
  defaultTheme.typography = { ...defaultTheme.typography, fontFamily };
  return defaultTheme;
};

export const DATE_LIST = ['locale', 'utc'];

export const TIME_FORMAT_LIST = ['12-hour', '24-hour'];

export const TX_LIST = ['compact', 'detailed'];
