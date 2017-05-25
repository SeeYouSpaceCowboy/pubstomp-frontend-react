import React from 'react'
import TestUtils from 'react-dom/test-utils'
import { createRenderer } from 'react-test-renderer/shallow'
import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)

import Header from '../../src/components/Header'

const renderer = createRenderer()

describe('Header Component', () => {
  it('renders correct text "Pubstomp"', () => {
    renderer.render( <Header /> )
    const actual = renderer.getRenderOutput()
    const expected = 'Pubstomp'
    expect( actual ).toIncludeJSX( expected )
  })
})
