/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgDeleteTariffs } from '@/models';

const DeleteTariffs: FC<{ message: MsgDeleteTariffs }> = (props: any) => {
  const { message } = props;
  const address = message.sender;
  const denom = message.denom.toUpperCase();

  return (
    <>
      <Typography>
        <AppTrans
          i18nKey="message_contents:txDeleteTariffsContent"
          values={{ address, denom }}
          components={[
            <Name address={message.sender} name={message.sender} />,
            ,
            <span key={1}>{denom}</span>,
          ]}
        />
      </Typography>
    </>
  );
};

export default DeleteTariffs;
