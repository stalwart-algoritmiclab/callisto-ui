/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

/* eslint-disable @typescript-eslint/no-var-requires */
const getNextConfig = require('shared-utils/configs/next');

function getSitemap(dir) {
  const nextConfig = getNextConfig(dir);
  const { basePath } = nextConfig;
  const siteUrl = process.env.SITE_URL || `https://bigdipper.live${basePath}`;

  return {
    siteUrl,
    generateRobotsTxt: true,
    exclude: ['/server-sitemap-index.xml'], // <= exclude here
    robotsTxtOptions: {
      additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],
    },
  };
}

module.exports = getSitemap;
