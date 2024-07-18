/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgUpdateRates } from '@/models';
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
const UpdateRates: FC<{ message: MsgUpdateRates }> = (props: any) => {
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
  const rate = message.json.rate;



  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txUpdateRatesContent"
        components={[
          <Name address={creator} name={creator} />,
          <strong>{rate}</strong>,
          <strong>{denom}</strong>,

        ]}
        values={{
          creator,
          rate,
          denom,
        }}
      />
    </Typography>
  );
};

export default UpdateRates;
