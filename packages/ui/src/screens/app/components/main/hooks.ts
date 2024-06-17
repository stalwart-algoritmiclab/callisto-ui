/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import chainConfig from '@/chainConfig';
import { getThemeTemplate, readTheme } from '@/recoil/settings';
import dayjs from '@/utils/dayjs';

const { genesis } = chainConfig();

export const useTheme = (fontFamily: string) => {
  const theme = useRecoilValue(readTheme);
  const muiTheme = createTheme(getThemeTemplate(theme, fontFamily));
  return { muiTheme };
};

export const useGenesis = () => {
  const utcTimeNow = dayjs.utc().format('YYYY-MM-DDTHH:mm:ss');
  const [genesisStarted, setGenesis] = useState(genesis.time < utcTimeNow);

  const startGenesis = () => {
    setTimeout(() => {
      setGenesis(true);
    }, 10000);
  };

  return {
    genesisStarted,
    startGenesis,
  };
};
