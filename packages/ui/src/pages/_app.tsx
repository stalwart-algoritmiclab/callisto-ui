/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import MyApp from '@/screens/app';
import { appWithTranslation } from 'next-i18next';
import 'react-toastify/dist/ReactToastify.css';
import 'shared-utils/assets/styles/global.css';
import nextI18NextConfig from '../../next-i18next.config';

export default appWithTranslation(MyApp, nextI18NextConfig);
