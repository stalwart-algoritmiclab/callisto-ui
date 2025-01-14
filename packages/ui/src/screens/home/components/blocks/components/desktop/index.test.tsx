/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import renderer from 'react-test-renderer';
import Desktop from '@/screens/home/components/blocks/components/desktop';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================
jest.mock('@/components/avatar_name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="AvatarName" {...props} />
));
// ==================================
// unit tests
// ==================================
describe('screen: Home/Blocks/Desktop', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Desktop
          items={[
            {
              height: 4000,
              txs: 12,
              timestamp: '2021-02-18T09:02:28.668623',
              hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
              proposer: 'desmosvalcons1why72hjk945yhckcy5hzk2z2w9d5h65t9am0kd',
            },
          ]}
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
