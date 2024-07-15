/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Desktop from '@/components/nav/components/desktop';
import Mobile from '@/components/nav/components/mobile';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import { FC } from 'react';

type NavProps = {
  title?: string;
};

const Nav: FC<NavProps> = ({ title }) => {
  const display = useDisplayStyles().classes;
  return (
    <>
      <Desktop className={display.hiddenUntilLg} title={title ?? ''} />
      <Mobile className={display.hiddenWhenLg} title={title ?? ''} />
    </>
  );
};

export default Nav;
