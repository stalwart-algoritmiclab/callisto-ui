/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import withGetStaticProps from '@/pages/withGetStaticProps';
import ProfileDetails from '@/screens/profile_details';
import type { NextPage } from 'next';
import nextI18NextConfig from '../../next-i18next.config';

const ProfileDetailsPage: NextPage = () => <ProfileDetails />;

export const getStaticPaths = () => ({ paths: [], fallback: 'blocking' });
export const getStaticProps = withGetStaticProps(nextI18NextConfig, 'profiles', 'accounts');

export default ProfileDetailsPage;
