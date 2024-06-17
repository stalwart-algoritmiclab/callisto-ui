/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { GetStaticPropsContext } from 'next';
import { UserConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function withGetStaticProps(nextI18NextConfig: UserConfig, ...namespacesRequired: string[]) {
  const namespaceForApp = process.env.NEXT_PUBLIC_APP_NAME ?? '';
  return async ({ locale }: GetStaticPropsContext) => ({
    props: {
      ...(await serverSideTranslations(
        locale || 'en',
        ['common', namespaceForApp, ...namespacesRequired],
        nextI18NextConfig
      )),
    },
  });
}

export default withGetStaticProps;
