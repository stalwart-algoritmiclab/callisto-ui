/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import renderer from 'react-test-renderer';
import CreateVestingAccount from '@/components/msg/vesting/create_vesting_account';
import { MsgCreateVestingAccount } from '@/models';
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
describe('screen: TransactionDetails/CreateVestingAccount', () => {
  it('matches snapshot', () => {
    const message = MsgCreateVestingAccount.fromJson({
      category: 'vesting',
      type: 'MsgGrant',
      to_address: 'toAddress',
      from_address: 'fromAddress',
    });
    const component = renderer.create(
      <MockTheme>
        <CreateVestingAccount message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgCreateVestingAccount'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
