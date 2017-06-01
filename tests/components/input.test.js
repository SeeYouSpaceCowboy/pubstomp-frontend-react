import React from 'react'
import TestUtils from 'react-dom/test-utils'
import { createRenderer } from 'react-test-renderer/shallow'
import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)

import Input from '../../src/components/UserOverlay/Input'

const renderer = createRenderer()

describe('Input Component', () => {
  it('renders with a label', () => {
    let props = {
      label: {
        class: 'email-label',
        text: 'Email',
        lineBreak: true
      },
      input: {
        class: 'email-input',
        name: 'email',
        type: 'text',
        placeholder: 'Enter email',
        value: '',
        onChange: null
      }
    }
    renderer.render( <Input { ...props } /> )
    const actual = renderer.getRenderOutput().props.children
    const expected = 'label'
    expect( actual ).toIncludeJSX( expected )
  })

  it('renders without a label', () => {
    let props = {
      input: {
        class: 'email-input',
        name: 'email',
        type: 'text',
        placeholder: 'Enter email',
        value: '',
        onChange: null
      }
    }
    renderer.render( <Input { ...props } /> )
    const actual = renderer.getRenderOutput().props.children
    const expected = 'label'
    expect( actual ).toNotIncludeJSX( expected )
  })

  it('renders with a line break seperating label and input fields', () => {
    let props = {
      label: {
        class: 'email-label',
        text: 'Email',
        lineBreak: true
      },
      input: {
        class: 'email-input',
        name: 'email',
        type: 'text',
        placeholder: 'Enter email',
        value: '',
        onChange: null
      }
    }
    renderer.render( <Input { ...props } /> )
    const actual = renderer.getRenderOutput().props.children
    const expected = 'br'
    expect( actual ).toIncludeJSX( expected )
  })

  it('renders without a line break seperating label and input fields', () => {
    // tested in three different ways

    let props = {
      label: {
        class: 'email-label',
        text: 'Email',
        lineBreak: false
      },
      input: {
        class: 'email-input',
        name: 'email',
        type: 'text',
        placeholder: 'Enter email',
        value: '',
        onChange: null
      }
    }
    renderer.render( <Input { ...props } /> )
    let actual = renderer.getRenderOutput().props.children
    const expected = 'br'
    expect( actual ).toNotIncludeJSX( expected )

    props = {
      label: {
        class: 'email-label',
        text: 'Email'
      },
      input: {
        class: 'email-input',
        name: 'email',
        type: 'text',
        placeholder: 'Enter email',
        value: '',
        onChange: null
      }
    }
    renderer.render( <Input { ...props } /> )
    actual = renderer.getRenderOutput().props.children
    expect( actual ).toNotIncludeJSX( expected )

    props = {
      input: {
        class: 'email-input',
        name: 'email',
        type: 'text',
        placeholder: 'Enter email',
        value: '',
        onChange: null
      }
    }
    renderer.render( <Input { ...props } /> )
    actual = renderer.getRenderOutput().props.children
    expect( actual ).toNotIncludeJSX( expected )
  })

  it('renders correct properties', () => {
    let props = {
      label: {
        class: 'email-label',
        text: 'Email',
        lineBreak: true
      },
      input: {
        class: 'email-input',
        name: 'Email',
        type: 'text',
        placeholder: 'Enter email',
        value: 'ehass@gmail.com',
        onChange: null
      }
    }
    renderer.render( <Input { ...props } /> )
    const actual = renderer.getRenderOutput().props.children
    expect( actual ).toIncludeJSX( 'email-label' )
    expect( actual ).toIncludeJSX( 'Email' )
    expect( actual ).toIncludeJSX( 'email-input' )
    expect( actual ).toIncludeJSX( 'Email' )
    expect( actual ).toIncludeJSX( 'text' )
    expect( actual ).toIncludeJSX( 'Enter email' )
    expect( actual ).toIncludeJSX( 'ehass@gmail.com' )
  })

  it('renders with the onChange function attached', () => {
    let props = {
      label: {
        class: 'email-label',
        text: 'Email',
        lineBreak: true
      },
      input: {
        class: 'email-input',
        name: 'Email',
        type: 'text',
        placeholder: 'Enter email',
        value: 'ehass@gmail.com',
        onChange: { name: 'onChange' }
      }
    }
    renderer.render( <Input { ...props } /> )
    const actual = renderer.getRenderOutput().props.children.props.children[2].props.onChange.name
    const expected = 'onChange'
    expect( actual ).toEqual( expected )
  })

})
