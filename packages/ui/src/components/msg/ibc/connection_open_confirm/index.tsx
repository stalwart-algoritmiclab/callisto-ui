/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { type MsgConnectionOpenConfirm } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const ConnectionOpenConfirm: FC<{ message: MsgConnectionOpenConfirm }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txConnectionOpenConfirmContent"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          connectionId: message.connectionId,
        }}
      />
    </Typography>
  );
};

export default ConnectionOpenConfirm;
