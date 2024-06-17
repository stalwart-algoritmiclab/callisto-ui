/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import type { NextPage } from 'next';
import ErrorPage, { getInitialProps } from 'ui/pages/_error';

const MyError: NextPage = () => <ErrorPage />;

MyError.getInitialProps = getInitialProps;

export default MyError;
