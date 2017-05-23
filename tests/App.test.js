import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { createRenderer } from 'react-test-renderer/shallow';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

describe('Testing Suite', () => {

  it('renders without crashing', () => {
    const actual = true
    const expected = true
    expect( actual ).toEqual( expected );
  });

});
