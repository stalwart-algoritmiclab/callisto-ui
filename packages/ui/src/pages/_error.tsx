/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Error from '@/screens/error';
import type { NextPage, NextPageContext } from 'next';
import NextErrorComponent from 'next/error';
import captureUnderscoreErrorException from 'shared-utils/configs/captureUnderscoreErrorException';

const ErrorPage: NextPage = () => <Error />;

export const getInitialProps = async (contextData: NextPageContext) => {
  await captureUnderscoreErrorException(contextData);
  return NextErrorComponent.getInitialProps(contextData);
};

export default ErrorPage;
