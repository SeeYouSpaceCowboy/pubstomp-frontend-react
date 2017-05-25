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
    renderer.render( <SessionForm onSubmit={onSubmit} form={ form } /> )
    const actual = renderer.getRenderOutput()
    const expected = 'Input'
    expect( actual ).toIncludeJSX( expected )
  })

  it('renders with the onSubmit function attached', () => {
    renderer.render( <SessionForm onSubmit={onSubmit} form={ form } /> )
    const actual = renderer.getRenderOutput().props.children[1].props.onSubmit.name
    const expected = 'onSubmit'
    expect( actual ).toEqual( expected )
  })

  it('renders correct text heading text', () => {
    renderer.render( <SessionForm onSubmit={onSubmit} form={ form } /> )
    const actual = renderer.getRenderOutput()
    const expected = 'Sign up or Login'
    expect( actual ).toIncludeJSX( expected )
  })

})
