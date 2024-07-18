import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgCreateAddressesSecured } from '@/models';
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
const CreateAddressesSecured: FC<{ message: MsgCreateAddressesSecured }> = (props: any) => {
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
  const addresses = message.json.address;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txCreateAddressSecureContent"
        components={[
          <Name address={creator} name={creator} />,
          ...addresses.map((address: any, index: any) => (
            <Name key={`address-${index}`} address={address} name={address} />
          ))
        ]}
        values={{
          creator,
          addresses: addresses.map((address: any, index: any) => (
            `<Name key=${index} address=${address} name=${address} />`
          ))
        }}
      />
    </Typography>
  );
};

export default CreateAddressesSecured;
