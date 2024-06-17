/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

/* eslint-disable @typescript-eslint/no-var-requires */
const { readFileSync } = require('fs');
const { i18n } = require('./next-i18next.config');
const getNextConfig = require('../shared-utils/configs/next');

const nextConfig = getNextConfig(JSON.parse(readFileSync('./package.json', 'utf8')).name);
nextConfig.i18n = i18n;

module.exports = nextConfig;
