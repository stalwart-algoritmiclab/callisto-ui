/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import mockApollo from '@/tests/mocks/mockApollo';
import mockChainConfig from '@/tests/mocks/mockChainConfig';
import mockDayJs from '@/tests/mocks/mockDayJs';
import mockDynamicComponent from '@/tests/mocks/mockDynamicComponent';
import mockI18Next from '@/tests/mocks/mockI18Next';
import mockProfiles from '@/tests/mocks/mockProfiles';
import '@testing-library/jest-dom/extend-expect';
import 'jest-localstorage-mock';

jest.setTimeout(30000);
mockI18Next();
mockApollo();
mockChainConfig();
mockDayJs();
mockDynamicComponent();
mockProfiles();
