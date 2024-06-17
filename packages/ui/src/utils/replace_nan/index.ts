/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

/**
 * Util that replaces the word NaN and Infinity to 100
 * @param format string
 * @param base 0
 * @returns new string
 */
export const replaceNaN = (format: string, base = '0') =>
  format.replace('NaN', base).replace('Infinity', '100');
