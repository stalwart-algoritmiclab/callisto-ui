/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgUpdateTariffs } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatToken, useRatesAll } from '@/utils';
import { useStyles } from './styles';

const UpdateTariffs: FC<{ message: MsgUpdateTariffs }> = (props: any) => {
  const { message } = props;
  const { classes } = useStyles();

  const minRefBalance = message.tariffs.minRefBalance;
  const denom = message.denom.toUpperCase();
  const denomTariffs = message.tariffs.denom.toUpperCase();

  const formatedMinRefBalanceValue = parseFloat(
    formatToken(minRefBalance, denomTariffs, 8).value
  ).toString();
  const fees = message.tariffs.fees;

  return (
    <>
      <Typography>
        <AppTrans
          i18nKey="message_contents:txUpdateTariffsContent"
          values={{ denom, denomTariffs, minRefBalance: formatedMinRefBalanceValue }}
          components={[
            <span key={0}>{denom}</span>,
            <span key={2}>{denomTariffs}</span>,
            <span key={3}>{formatedMinRefBalanceValue}</span>,
          ]}
        />
      </Typography>
      <div className={classes.root}>
        <table className={classes.table}>
          <thead>
            <tr className={classes.tr}>
              <th className={classes.th}>Amount from</th>
              <th className={classes.th}>Fee</th>
              <th className={classes.th}>Referral reward</th>
              <th className={classes.th}>Stake reward</th>
              <th className={classes.th}>No referral reward</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee, index) => {
              const formattedAmountFrom = parseFloat(
                formatToken(fee.amountFrom, denomTariffs, 8).value
              ).toString();
              return (
                <tr key={index} className={classes.tr}>
                  <td className={classes.td}>{formattedAmountFrom}</td>
                  <td className={classes.td}>{(fee.fee * 100).toFixed(2)}%</td>
                  <td className={classes.td}>{(fee.refReward * 100).toFixed(2)}% *</td>
                  <td className={classes.td}>{(fee.stakeReward * 100).toFixed(2)}% *</td>
                  <td className={classes.td}>{fee.noRefReward ? '+' : '-'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>* percent from commission</p>
      </div>
    </>
  );
};

export default UpdateTariffs;
