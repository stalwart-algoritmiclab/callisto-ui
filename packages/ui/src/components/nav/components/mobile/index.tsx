/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { FC } from 'react';
import Menu from '@/components/nav/components/mobile/components/menu';
import Navbar from '@/components/nav/components/mobile/components/navbar';
import { useMobile } from '@/components/nav/components/mobile/hooks';
import useStyles from '@/components/nav/components/mobile/styles';
import Networks from '@/components/nav/components/networks';
import SearchBar from '@/components/nav/components/search_bar';
import TitleBar from '@/components/nav/components/title_bar';
import { useGetComponentDimension } from '@/hooks/use_get_component_dimension';

type MobileProps = {
  className?: string;
  title: string;
};

const Mobile: FC<MobileProps> = ({ className, title }) => {
  const { ref: heightRef, height } = useGetComponentDimension();
  const { isMenu, isNetwork, isOpen, openNetwork, toggleNavMenus } = useMobile();
  const { classes, cx } = useStyles();

  return (
    <div className={className}>
      <div ref={heightRef} className={classes.root}>
        <Menu
          toggleNavMenus={toggleNavMenus}
          className={cx(classes.screens, {
            open: isMenu,
            menu: isMenu,
          })}
        />
        <span
          className={cx(classes.screens, {
            open: isNetwork,
            network: isNetwork,
          })}
        >
          <Networks className={classes.networks} />
        </span>
        <Navbar isOpen={isOpen} openNetwork={openNetwork} toggleNavMenus={toggleNavMenus} />
        <SearchBar className={classes.searchBar} />
      </div>
      {/* ============================== */}
      {/* Height placeholder */}
      {/* ============================== */}
      <div style={{ height }} />
      <TitleBar title={title} />
    </div>
  );
};

export default Mobile;
