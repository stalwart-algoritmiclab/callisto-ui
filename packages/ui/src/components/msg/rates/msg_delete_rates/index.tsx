/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgDeleteRates } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber, formatToken, useRatesAll } from '@/utils';

interface Token {
  denom: string;
  rate: number;
  creator: string;
  decimals: number;
}

interface TokenDisplay {
  display: string;
  exponent: number;
  displayDenom: string;
}
const DeleteRates: FC<{ message: MsgDeleteRates }> = (props: any) => {
  const ratesAll = useRatesAll();

  const transformedTokens: { [key: string]: TokenDisplay } = {};

  ratesAll.forEach((token: Token) => {
    transformedTokens[token.denom] = {
      display: token.denom,
      exponent: token.decimals,
      displayDenom: token.denom,
    };
  });
  const { message } = props;
  const creator = message.json.creator;
  const denom = message.json.denom.toUpperCase();




  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txDeleteRatesContent"
        components={[
          <Name address={creator} name={creator} />,
          <strong>{denom}</strong>,
        ]}
        values={{
          creator,
          denom,
        }}
      />
    </Typography>
  );
};

export default DeleteRates;
