/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { NextSeo } from 'next-seo';
import useAppTranslation from '@/hooks/useAppTranslation';
import Layout from '@/components/layout';
import List from '@/screens/validators/components/list';
import useStyles from '@/screens/validators/styles';

const Validators = () => {
  const { t } = useAppTranslation('validators');
  const { classes } = useStyles();
  return (
    <>
      <NextSeo
        title={t('validators') ?? undefined}
        openGraph={{
          title: t('validators') ?? undefined,
        }}
      />
      <Layout navTitle={t('validators') ?? undefined} className={classes.root}>
        <List />
      </Layout>
    </>
  );
};

export default Validators;
