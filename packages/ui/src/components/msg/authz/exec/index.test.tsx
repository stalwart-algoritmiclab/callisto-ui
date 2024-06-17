/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import renderer from 'react-test-renderer';
import Exec from '@/components/msg/authz/exec';
import { MsgExec } from '@/models';
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
describe('screen: TransactionDetails/Exec', () => {
  it('matches snapshot', () => {
    const message = MsgExec.fromJson({
      category: 'authz',
      type: 'MsgExec',
      grantee: 'grantee',
    });

    const component = renderer.create(
      <MockTheme>
        <Exec message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgExec'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
