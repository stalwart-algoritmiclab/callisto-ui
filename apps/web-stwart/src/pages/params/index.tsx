/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import withGetStaticProps from '@/pages/withGetStaticProps';
import Params from '@/screens/params';
import type { NextPage } from 'next';
import nextI18NextConfig from '../../../next-i18next.config';

const ParamsPage: NextPage = () => <Params />;

export const getStaticProps = withGetStaticProps(nextI18NextConfig, 'params');

export default ParamsPage;
