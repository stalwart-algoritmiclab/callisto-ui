/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import numeral from 'numeral';
import { FC } from 'react';
import chainConfig from '@/chainConfig';
import useStyles from '@/screens/home/components/hero/components/online_voting_power/styles';
import { useOnlineVotingPower } from '@/screens/home/components/hero/components/online_voting_power/hooks';

const OnlineVotingPower: FC<ComponentDefault> = () => {
  const { t } = useAppTranslation('home');
  const { onlineVPstate } = useOnlineVotingPower();

  const { chainName } = chainConfig();

  const votingPowerPercent =
    // eslint-disable-next-line no-nested-ternary
    chainName === 'wormhole'
      ? numeral((onlineVPstate.activeValidators / onlineVPstate.votingPower) * 100)
      : onlineVPstate.totalVotingPower === 0
      ? numeral(0)
      : numeral((onlineVPstate.votingPower / onlineVPstate.totalVotingPower) * 100);

  const { classes } = useStyles({ percentage: votingPowerPercent.format('0') });

  return (
    <div className={classes.root}>
      <Typography variant="h2">{t('onlineVotingPower')}</Typography>
      <div className={classes.data}>
        <Typography variant="h3" className="primary__data">
          {`${votingPowerPercent.format('0,0.00', (n) => Math.floor(n))}%`}
        </Typography>
        <Typography variant="body1">
          {numeral(onlineVPstate.votingPower).format('0,0')} /{' '}
          {onlineVPstate.totalVotingPower === 0
            ? numeral(onlineVPstate.votingPower).format('0,0')
            : numeral(onlineVPstate.totalVotingPower).format('0,0')}
        </Typography>
      </div>
      <div className={classes.chart}>
        <div className={classes.active} />
      </div>
      <div className={classes.itemsContainer}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('validators')}
          </Typography>
          <Typography variant="body1" className="value">
            {numeral(onlineVPstate.activeValidators).format('0,0')}
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('votingPowerPercent')}
          </Typography>
          <Typography variant="body1" className="value">
            {`${votingPowerPercent.format('0,0.00', (n) => Math.floor(n))}%`}
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('votingPower')}
          </Typography>
          <Typography variant="body1" className="value">
            {numeral(onlineVPstate.votingPower).format('0,0')}
          </Typography>
        </div>
        {onlineVPstate.totalVotingPower === 0 ? null : (
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('totalVotingPower')}
            </Typography>
            <Typography variant="body1" className="value">
              {numeral(onlineVPstate.totalVotingPower).format('0,0')}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnlineVotingPower;
