/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgIssue } from '@/models';
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
const Issue: FC<{ message: MsgIssue }> = (props: any) => {
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
  const sender = message.sender;
  const receiver = message.receiver;
  const denom = message.json.denom;
  const amount = message.json.amount;
  const tokenValue = formatToken(amount, denom, transformedTokens[denom]?.exponent || 8).value;

  const token = `${formatNumber(
    tokenValue,
    transformedTokens[denom]?.exponent || 8
  )} ${denom.toUpperCase()}`;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txIssueContent"
        components={[
          <Name address={sender} name={sender} />,
          <strong>{token}</strong>,
          <Name address={receiver} name={receiver} />,
        ]}
        values={{
          sender,
          token,
          receiver,
        }}
      />
    </Typography>
  );
};

export default Issue;
