/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { type MsgUnjail } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const Unjail: FC<{ message: MsgUnjail }> = (props) => {
  const { message } = props;
  const validator = useProfileRecoil(message.validatorAddress);
  const validatorMoniker = validator ? validator?.name : message.validatorAddress;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txUnjailContent"
        components={[<Name address={message.validatorAddress} name={validatorMoniker} />]}
      />
    </Typography>
  );
};

export default Unjail;
