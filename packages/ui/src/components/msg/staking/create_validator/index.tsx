/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgCreateValidator } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const CreateValidator: FC<{ message: MsgCreateValidator }> = (props) => {
  const { message } = props;

  const delegator = useProfileRecoil(message.delegatorAddress);
  const delegatorMoniker = delegator ? delegator?.name : message.delegatorAddress;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txCreateValidatorContent"
        components={[
          <Name address={message.delegatorAddress} name={delegatorMoniker} />,
          <Name
            address={message.validatorAddress}
            name={message?.description?.moniker || message.validatorAddress}
          />,
        ]}
      />
    </Typography>
  );
};

export default CreateValidator;
