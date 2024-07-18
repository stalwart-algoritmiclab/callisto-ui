import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgDeleteAddressesSecured } from '@/models';
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
const DeleteAddressesSecured: FC<{ message: MsgDeleteAddressesSecured }> = (props: any) => {
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


  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txDeleteAddressSecureContent"
        components={[
          <Name address={creator} name={creator} />,
        ]}
        values={{
          creator,
        }}
      />
    </Typography>
  );
};

export default DeleteAddressesSecured;
