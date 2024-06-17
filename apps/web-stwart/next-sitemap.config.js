/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

/* eslint-disable @typescript-eslint/no-var-requires */
const { readFileSync } = require('fs');
const getSitemap = require('shared-utils/configs/sitemap');

module.exports = getSitemap(JSON.parse(readFileSync('./package.json', 'utf8')).name);
