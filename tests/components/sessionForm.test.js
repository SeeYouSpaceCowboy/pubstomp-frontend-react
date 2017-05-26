import React from 'react'
import TestUtils from 'react-dom/test-utils'
import { createRenderer } from 'react-test-renderer/shallow'
import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)

import SessionForm from '../../src/components/Session/SessionForm'

const renderer = createRenderer()


describe('Session/ Login/ Signup Component', () => {
  let onSubmit = {
    name: 'onSubmit'
  }

  let form = {
    email: '',
    password: ''
  }

  it('renders Input components', () => {
    let user = null

    renderer.render( <SessionForm onSubmit={onSubmit} form={ form } user={ user } /> )
    const actual = renderer.getRenderOutput()
    const expected = 'Input'
    expect( actual ).toIncludeJSX( expected )
  })

  it('renders with the onSubmit function attached', () => {
    let user = null

    renderer.render( <SessionForm onSubmit={onSubmit} form={ form } user={ user } /> )
    const actual = renderer.getRenderOutput().props.children.props.onSubmit.name
    const expected = 'onSubmit'
    expect( actual ).toEqual( expected )
  })

  it('renders sign in/ sign up form if user is not signed in', () => {
    let user = null

    renderer.render( <SessionForm onSubmit={onSubmit} form={ form } user={ user } /> )
    const actual = renderer.getRenderOutput()
    const expected = 'password'
    expect( actual ).toIncludeJSX( expected )
  })

  it('renders logout button if user is signed in', () => {
    let user = {
      email: 'test@email.com'
    }

    renderer.render( <SessionForm onSubmit={onSubmit} form={ form } user={ user } /> )
    const actual = renderer.getRenderOutput()
    const expected = 'Logout'
    expect( actual ).toIncludeJSX( expected )
  })

})
