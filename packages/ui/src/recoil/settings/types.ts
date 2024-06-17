/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

export type Theme = 'light' | 'dark' | 'device' | 'deuteranopia' | 'tritanopia' | 'achromatopsia';
export type Date = 'locale' | 'utc';
export type TimeFormat = '12-hour' | '24-hour';
export type Tx = 'compact' | 'detailed';

export interface AtomState {
  theme: Theme;
  dateFormat: Date;
  timeFormat: TimeFormat;
  txListFormat: Tx;
}
