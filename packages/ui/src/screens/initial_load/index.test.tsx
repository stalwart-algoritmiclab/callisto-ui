/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import renderer from 'react-test-renderer';
import InitialLoad from '@/screens/initial_load';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================
jest.mock('@mui/material/LinearProgress', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="LinearProgress" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: InitialLoad', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <InitialLoad />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
