/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import React from 'react';
import renderer from 'react-test-renderer';
import MockTheme from '@/tests/mocks/MockTheme';
import Nav from '@/components/nav';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================

jest.mock('@/components/nav/components/desktop', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Desktop" {...props} />
));
jest.mock('@/components/nav/components/mobile', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Mobile" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('component: Nav', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <Nav />
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
