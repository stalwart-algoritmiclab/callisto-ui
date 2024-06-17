/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import renderer from 'react-test-renderer';
import DtagTransferRequest from '@/components/msg/profiles/dtag_transfer_request';
import { MsgDtagTransferRequest } from '@/models';
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
describe('screen: TransactionDetails/DtagTransferRequest', () => {
  it('matches snapshot', () => {
    const message = MsgDtagTransferRequest.fromJson({
      category: 'profiles',
      type: 'MsgDtagCancelTransfer',
      sender: 'sender',
      receiver: 'receiver',
    });
    const component = renderer.create(
      <MockTheme>
        <DtagTransferRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
