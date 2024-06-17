/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Layout from '@/components/layout';
import Blocks from '@/screens/home/components/blocks';
import Consensus from '@/screens/home/components/consensus';
import DataBlocks from '@/screens/home/components/data_blocks';
import Hero from '@/screens/home/components/hero';
import Tokenomics from '@/screens/home/components/tokenomics';
import Transactions from '@/screens/home/components/transactions';
import useStyles from '@/screens/home/styles';

const Home = () => {
  const { classes } = useStyles();

  return (
    <Layout className={classes.root}>
      <DataBlocks className={classes.dataBlocks} />
      <Hero className={classes.hero} />
      <Tokenomics className={classes.tokenomics} />
      <Consensus className={classes.consensus} />
      <Blocks className={classes.blocks} />
      <Transactions className={classes.transactions} />
    </Layout>
  );
};

export default Home;
