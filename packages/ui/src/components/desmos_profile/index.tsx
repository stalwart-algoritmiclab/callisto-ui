/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import useAppTranslation from '@/hooks/useAppTranslation';
import Avatar from '@/components/avatar';
import Box from '@/components/box';
import Connections from '@/components/desmos_profile/components/connections';
import { useDesmosProfile } from '@/components/desmos_profile/hooks';
import useStyles from '@/components/desmos_profile/styles';
import Markdown from '@/components/markdown';
import Loading from '@/components/loading';

import Typography from '@mui/material/Typography';

import numeral from 'numeral';

import { FC } from 'react';

type DesmosProfileProps = {
  className?: string;
  loading?: boolean;
} & Omit<DesmosProfile, 'address'>;

const DesmosProfile: FC<DesmosProfileProps> = (props) => {
  const { t } = useAppTranslation('accounts');
  const { classes, cx } = useStyles({ coverUrl: props.coverUrl });
  const { connectionsOpen, handleConnectionsClose, handleConnectionsOpen } = useDesmosProfile();

  const displayConnections = props.connections.length ? '' : 'hide';

  return (
    <>
      <Box className={cx(classes.root, props.className)}>
        {props.loading ? (
          <Loading />
        ) : (
          <>
            <div className={classes.cover}>
              <div className="cover" />
            </div>
            <div className={classes.avatarContainer}>
              <Avatar address={props.dtag} imageUrl={props.imageUrl} className={classes.avatar} />
              <Typography
                variant="body1"
                className={cx(classes.link, displayConnections)}
                onClick={handleConnectionsOpen}
                role="button"
              >
                {t('connections', {
                  connections: numeral(props.connections.length).format('0,0'),
                })}
              </Typography>
            </div>
            <div className={classes.nicknameWrapper}>
              <Typography variant="h2">{props.nickname}</Typography>
              <Typography variant="body2" className="tag">
                @{props.dtag}
              </Typography>
            </div>
            {props.bio && (
              <div>
                <Markdown markdown={props.bio} />
              </div>
            )}
          </>
        )}
      </Box>
      <Connections
        open={connectionsOpen}
        handleClose={handleConnectionsClose}
        data={props.connections}
      />
    </>
  );
};

export default DesmosProfile;
