/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import ProposalDetails from '@/screens/proposal_details';
import nextI18NextConfig from '../../../next-i18next.config';

const TokenDetailsPage: NextPage = () => <ProposalDetails />;

export const getStaticPaths = () => ({ paths: [], fallback: 'blocking' });
export const getStaticProps = withGetStaticProps(nextI18NextConfig, 'proposals');

export default TokenDetailsPage;
