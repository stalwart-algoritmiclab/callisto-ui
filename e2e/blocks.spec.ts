/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { test } from '@playwright/test';
import { interceptRoutes, waitForMenuItemClick, waitForReady } from './common';

test('blocks page', async ({ page, isMobile }) => {
  await interceptRoutes(page);

  // Test single block url
  await page.goto(`./blocks/1`);
  await waitForReady(page);

  await waitForMenuItemClick(
    'ul > a.active[href="/blocks"]',
    page.getByRole('link', { name: 'Blocks' }),
    isMobile
  );
});
