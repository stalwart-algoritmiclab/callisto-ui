/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import renderer from 'react-test-renderer';
import Pagination from '@/components/pagination';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================
jest.mock(
  '@/components/pagination/components/actions',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Actions" {...props} />
);

// ==================================
// unit tests
// ==================================
describe('components: Pagination', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Pagination
          total={100}
          handlePageChange={jest.fn()}
          handleRowsPerPageChange={jest.fn()}
          page={0}
          rowsPerPage={5}
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
