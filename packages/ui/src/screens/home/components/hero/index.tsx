/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Box from '@/components/box';
import Loading from '@/components/loading';
import OnlineVotingPower from '@/screens/home/components/hero/components/online_voting_power';
import TokenPrice from '@/screens/home/components/hero/components/token_price';
import { useHero } from '@/screens/home/components/hero/hooks';
import { FC } from 'react';

const Hero: FC<ComponentDefault> = (props) => {
  const { state } = useHero();
  let component = null;
  if (!state.loading) {
    if (state.tokenPriceHistory.length) {
      component = <TokenPrice items={state.tokenPriceHistory} />;
    } else {
      component = <OnlineVotingPower />;
    }
  } else {
    component = <Loading />;
  }

  return <Box className={props.className}>{component}</Box>;
};

export default Hero;
