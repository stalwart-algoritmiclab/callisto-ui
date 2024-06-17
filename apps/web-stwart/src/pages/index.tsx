/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import withGetStaticProps from '@/pages/withGetStaticProps';
import Home from '@/screens/home';
import type { NextPage } from 'next';
import nextI18NextConfig from '../../next-i18next.config';

const HomePage: NextPage = () => <Home />;

export const getStaticProps = withGetStaticProps(
  nextI18NextConfig,
  'home',
  'blocks',
  'transactions'
);

export default HomePage;
