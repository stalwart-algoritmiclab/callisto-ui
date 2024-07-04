/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgExchange, MsgFaucet } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatToken, useRatesAll } from '@/utils';

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
const Faucet: FC<{ message: MsgFaucet }> = (props: any) => {
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
  const formatedAmounts = message.amounts.map((amount) =>
    formatToken(amount.amount, amount.denom, transformedTokens[amount.denom]?.exponent || 8)
  );

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txFaucetContent"
        components={[
          <Name address={message.receiver} name={message.receiver} />,
          <Name address={message.sender} name={message.sender} />,
        ]}
      />
      {formatedAmounts.map((amount, index) => (
        <p key={index}>
          <strong>{amount.value}</strong> <strong>{amount.displayDenom.toUpperCase()}</strong>
        </p>
      ))}
    </Typography>
  );
};

export default Faucet;
