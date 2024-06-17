/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import renderer from 'react-test-renderer';
import Avatar from '@/components/avatar';
import MockTheme from '@/tests/mocks/MockTheme';

jest.mock('jdenticon', () => ({
  update: jest.fn(),
}));

// ==================================
// unit tests
// ==================================
describe('component: Avatar', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Avatar address="123" />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot with imageUrl', () => {
    const component = renderer.create(
      <MockTheme>
        <Avatar
          address="123"
          imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
        />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
