/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import LinearProgress from '@mui/material/LinearProgress';
import { useRecoilValue } from 'recoil';
import BigDipperLogoRed from 'shared-utils/assets/big-dipper-red.svg';
import BigDipperLogoWhite from 'shared-utils/assets/big-dipper-white.svg';
import useStyles from '@/screens/initial_load/styles';
import { readTheme } from '@/recoil/settings';
import ChainIcon from '@/components/ChainIcon';

const InitialLoad = () => {
  const theme = useRecoilValue(readTheme);
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <ChainIcon type="logo" className={classes.logo} alt="logo" />
        <LinearProgress className={classes.divider} />
        {/* {theme === 'light' ? <BigDipperLogoRed /> : <BigDipperLogoWhite />} */}
      </div>
    </div>
  );
};

export default InitialLoad;
