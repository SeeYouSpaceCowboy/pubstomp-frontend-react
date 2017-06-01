import React from 'react'
import TestUtils from 'react-dom/test-utils'
import { createRenderer } from 'react-test-renderer/shallow'
import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)

import Avatar from '../../src/components/UserOverlay/Avatar'

const renderer = createRenderer()

describe('Avatar Component', () => {
  it('Displays a ? if user is not logged in', () => {
    let user = null

    renderer.render( <Avatar user={ user } /> )
    const actual = renderer.getRenderOutput()
    const expected = '?'
    expect( actual ).toIncludeJSX( expected )
  })

  it('Displays a the first letter of their email in uppercase, if user is logged in', () => {
    let user = {
      email: 'test@email.com'
    }

    renderer.render( <Avatar user={ user } /> )
    const actual = renderer.getRenderOutput()
    const expected = 'T'
    expect( actual ).toIncludeJSX( expected )
  })

  it('Displays an image if user is logged in and has an avatar img', () => {
    let user = {
      email: 'test@email.com',
      avatar: 'some-img-link.jpg'
    }

    renderer.render( <Avatar user={ user } /> )
    const actual = renderer.getRenderOutput()
    const expected = 'some-img-link.jpg'
    expect( actual ).toIncludeJSX( expected )
  })

})
