import React from 'react'
import TestUtils from 'react-dom/test-utils'
import { createRenderer } from 'react-test-renderer/shallow'
import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)

import UserMenu from '../../src/components/UserOverlay/UserMenu'

const renderer = createRenderer()

describe('UserMenu Component', () => {

  it('displays if a true show value is passed in', () => {
    let show = {
      userMenu: true
    }

    renderer.render( <UserMenu show={ show } /> )
    const actual = renderer.getRenderOutput()
    const expected = 'user-menu-container'
    expect( actual ).toIncludeJSX( expected )
  })

  it('is hidden if a false show value is passed in', () => {
    let show = {
      userMenu: false
    }

    renderer.render( <UserMenu show={ show } /> )
    const actual = renderer.getRenderOutput()
    const expected = 'hidden'
    expect( actual ).toIncludeJSX( expected )
  })


})
