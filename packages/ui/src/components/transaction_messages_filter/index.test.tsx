/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import renderer from 'react-test-renderer';
import TransactionMessagesFilter from '@/components/transaction_messages_filter';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;
const callback = jest.fn();

// ==================================
// mocks
// ==================================
jest.mock('@mui/material/MenuItem', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="MenuItem" {...props} />
));
jest.mock('@mui/material/Select', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Select" {...props} />
));
jest.mock('@mui/material/InputBase', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="InputBase" {...props} />
));
jest.mock('@mui/material/Typography', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Typography" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('component: TransactionMessagesFilter', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <TransactionMessagesFilter callback={callback} />
      </MockTheme>
    );
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
