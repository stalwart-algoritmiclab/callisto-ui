/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import renderer from 'react-test-renderer';
import Send from '@/components/msg/bank/send';
import { MsgSend } from '@/models';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================
jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgSend', () => {
  it('matches snapshot', () => {
    const message = MsgSend.fromJson({
      category: 'bank',
      type: 'MsgSend',
      from_address: 'fromAddress',
      to_address: 'toAddress',
      amount: [
        {
          denom: 'udaric',
          amount: '200000000',
        },
      ],
      json: JSON.stringify({
        from: 'fromAddress',
        to: 'toAddress',
        amount: [
          {
            denom: 'udaric',
            amount: '200000000',
          },
        ],
      }),
    });
    const component = renderer.create(
      <MockTheme>
        <Send message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
