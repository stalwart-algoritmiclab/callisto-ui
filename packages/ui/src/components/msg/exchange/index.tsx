/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgExchange } from '@/models';
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
const Exchange: FC<{ message: MsgExchange }> = (props: any) => {
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
  const tokenFromAmount = message.tokenFrom.amount;
  const tokenFromDenom = message.tokenFrom.denom.toUpperCase();
  const tokenToAmount = message.tokenTo.amount;
  const tokenToDenom = message.tokenTo.denom.toUpperCase();
  const tokenFromAmountFormated = formatToken(
    tokenFromAmount,
    tokenFromDenom,
    transformedTokens[message.tokenFrom.denom]?.exponent || 8
  ).value;

  const tokenFrom = `${tokenFromAmountFormated} ${tokenFromDenom}`;
  const tokenTo = `${tokenToAmount} ${tokenToDenom}`;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txExchangeContent"
        components={[
          <Name address={message.sender} name={message.sender} />,
          <strong>{tokenFrom}</strong>,
          <strong>{tokenTo}</strong>,
        ]}
        values={{
          sender: message.sender,
          tokenFrom: tokenFrom,
          tokenTo: tokenTo,
        }}
      />
    </Typography>
  );
};

export default Exchange;
