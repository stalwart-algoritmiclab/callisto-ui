/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

/**
 * Mui helper to return a11yProps tabs
 * @param index the index of the tab
 * @returns an object with `id` and `aria-controls`
 */
export const a11yProps = (index: number | string) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});
