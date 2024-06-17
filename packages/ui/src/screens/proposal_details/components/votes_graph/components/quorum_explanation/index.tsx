/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import useStyles from '@/screens/proposal_details/components/votes_graph/components/quorum_explanation/styles';

const QuorumExplanation = (props: { quorum: string }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Typography>
        <AppTrans
          i18nKey="proposals:quorumExplanation"
          components={[<b />]}
          values={{
            quorum: props.quorum,
          }}
        />
      </Typography>
    </div>
  );
};

export default QuorumExplanation;
