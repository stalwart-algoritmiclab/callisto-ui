/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

/* eslint-disable @typescript-eslint/no-var-requires */
const { withSentryConfig } = require('@sentry/nextjs');
const getNextConfig = require('../next');

const nextConfig = (dir, base) => {
  const baseConfig = {
    ...getNextConfig(dir, base),
    sentry: { hideSourceMaps: false },
  };
  return withSentryConfig(baseConfig, {});
};

module.exports = nextConfig;
