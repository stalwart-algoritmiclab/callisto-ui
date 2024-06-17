/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import renderer from 'react-test-renderer';
import Condition from '@/screens/validators/components/list/components/condition';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================

// ==================================
// unit tests
// ==================================
describe('screen: Validators/Condition', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Condition />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
