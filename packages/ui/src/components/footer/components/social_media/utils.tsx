/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { ReactNode } from 'react';
import { GithubIcon, LinkedinIcon, TelegramIcon, TwitterIcon } from '@/components/icons';

export const socialMediaLinks: {
  component: ReactNode;
  className: string;
  url: string;
}[] = [
  {
    component: <TelegramIcon />,
    className: 'telegram',
    url: 'https://t.me/forbole',
  },
  {
    component: <LinkedinIcon />,
    className: 'linkedin',
    url: 'https://www.linkedin.com/company/forbole',
  },
  {
    component: <TwitterIcon />,
    className: 'twitter',
    url: 'https://twitter.com/bigdipperlive',
  },
  {
    component: <GithubIcon />,
    className: 'github',
    url: 'https://github.com/forbole',
  },
];
