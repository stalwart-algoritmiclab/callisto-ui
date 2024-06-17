/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import renderer from 'react-test-renderer';
import NetworkList from '@/components/nav/components/desktop/components/action_bar/components/network_list';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
jest.mock('@/components/nav/components/networks', () => 'Networks');

// ==================================
// unit tests
// ==================================
describe('screen: Nav/NetworkList', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <NetworkList actionHeight={30} />
      </MockTheme>
    );
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
