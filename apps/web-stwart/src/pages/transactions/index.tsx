/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import withGetStaticProps from '@/pages/withGetStaticProps';
import Transactions from '@/screens/transactions';
import type { NextPage } from 'next';
import nextI18NextConfig from '../../../next-i18next.config';

const TransactionsPage: NextPage = () => <Transactions />;

export const getStaticProps = withGetStaticProps(
  nextI18NextConfig,
  'transactions',
  'message_labels',
  'message_contents'
);

export default TransactionsPage;
