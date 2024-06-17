/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import useStyles from '@/screens/validators/components/list/components/voting_power_explanation/styles';

const VotingPowerExplanation = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Typography>
        <AppTrans i18nKey="validators:votingPowerExplanation" components={[<b />]} />
      </Typography>
    </div>
  );
};

export default VotingPowerExplanation;
