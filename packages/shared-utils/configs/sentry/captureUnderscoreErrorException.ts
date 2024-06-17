/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import * as Sentry from '@sentry/nextjs';
import type { NextPageContext } from 'next';

async function captureUnderscoreErrorException(contextData: NextPageContext) {
  await Sentry.captureUnderscoreErrorException(contextData);
}

export default captureUnderscoreErrorException;
