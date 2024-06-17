/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgDtagAcceptTransfer } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const DtagAcceptTransfer: FC<{ message: MsgDtagAcceptTransfer }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  const receiver = useProfileRecoil(message.receiver);
  const receiverMoniker = receiver ? receiver?.name : message.receiver;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txAcceptDTagTransferContent"
        components={[
          <Name address={message.sender} name={senderMoniker} />,
          <Name address={message.receiver} name={receiverMoniker} />,
        ]}
      />
    </Typography>
  );
};

export default DtagAcceptTransfer;
