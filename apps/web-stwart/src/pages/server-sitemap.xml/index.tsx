/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import ServerSitemap, { getServerSideProps } from 'ui/pages/server-sitemap.xml';

// This function is called by Next.js before rendering the page. It returns
// a list of URLs that should be included in the sitemap.
export { getServerSideProps };

// Next.js calls this function to render the page.
export default ServerSitemap;
