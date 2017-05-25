import React from 'react'

import Input from './Input'

const SessionForm = ( props ) => {

  let inputs = [
    {
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
        value: props.form.email,
        onChange: props.onChange
      }
    },
    {
      label: {
        class: 'password-label',
        text: 'Password',
        lineBreak: true
      },
      input: {
        class: 'password-input',
        name: 'password',
        type: 'password',
        placeholder: 'Enter password',
        value: props.form.password,
        onChange: props.onChange
      }
    },
    {
      input: {
        class: 'submit-input',
        name: 'submit',
        type: 'submit',
        placeholder: '',
        value: 'Submit'
      }
    }
  ]

  return (
    <div className='session-form-container'>
      <h3>Sign up or Login</h3>
      <form className='session-form' onSubmit={ props.onSubmit } >

        { inputs.map( (input, i) => <Input key={ i } { ...input } />  )}

      </form>
    </div>
  )
}

export default SessionForm
