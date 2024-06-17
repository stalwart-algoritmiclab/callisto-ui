/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import renderer from 'react-test-renderer';
import CreateRelationship from '@/components/msg/profiles/create_relationship';
import { MsgCreateRelationship } from '@/models';
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
describe('screen: TransactionDetails/CreateRelationship', () => {
  it('matches snapshot', () => {
    const message = MsgCreateRelationship.fromJson({
      category: 'profiles',
      type: 'MsgCreateRelationship',
      sender: 'sender',
      receiver: 'receiver',
      subspace: 'subspace',
    });
    const component = renderer.create(
      <MockTheme>
        <CreateRelationship message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
