/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

export const tabLabels = (data: {
  yes: number;
  no: number;
  abstain: number;
  veto: number;
  notVoted: number;
}) => {
  const { yes, no, abstain, veto, notVoted } = data;
  const total = yes + no + abstain + veto;

  return [
    {
      key: 'all',
      num: total,
    },
    {
      key: 'yes',
      num: yes,
    },
    {
      key: 'no',
      num: no,
    },
    {
      key: 'veto',
      num: veto,
    },
    {
      key: 'abstain',
      num: abstain,
    },
    {
      key: 'didNotVote',
      num: notVoted,
    },
  ];
};
