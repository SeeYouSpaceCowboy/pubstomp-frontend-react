import React from 'react'

import Input from './Input'

const SessionForm = ( props ) => {
  let loginInputs = [
    {
      label: {
        class: 'session-label',
        text: 'Email',
        lineBreak: true
      },
      input: {
        class: 'session-input',
        name: 'email',
        type: 'text',
        placeholder: 'Enter email',
        value: props.form.email,
        onChange: props.onChange
      }
    },
    {
      label: {
        class: 'session-label',
        text: 'Password',
        lineBreak: true
      },
      input: {
        class: 'session-input',
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

  let logoutInput = [{
    input: {
      class: 'logout-input',
      name: 'logout',
      type: 'submit',
      placeholder: '',
      value: 'Logout'
    }
  }]

  let show = props.show ? 'session-form-container' : 'no-display'

  let inputs = props.user ? logoutInput : loginInputs;

  return (
    <div className={ show } >
      <form className='session-form' onSubmit={ props.onSubmit } >

        { inputs.map( (input, i) => <Input key={ i } { ...input } />  )}

      </form>
    </div>
  )
}

export default SessionForm
