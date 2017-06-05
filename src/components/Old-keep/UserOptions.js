import React from 'react'

const UserOptions = ( props ) => {

  let logoutInput = [{
    input: {
      class: 'logout-input',
      name: 'logout',
      type: 'submit',
      placeholder: '',
      value: 'Logout'
    }
  }]

  let show = props.show ? 'login-form-container' : 'no-display'

  return (
    <div className={ show } >
      <form className='login-form' onSubmit={ props.onLogin } >
        <label className='login-label' >
          Email
          <br />
          <input
            className='login-input'
            name='email'
            type='text'
            onChange={ props.onChange }
            placeholder='Enter Email'
            value={ props.form.email }
          />
        </label>
        <label className='login-label' >
          Password
          <br />
          <input
            className='login-input'
            name='password'
            type='password'
            onChange={ props.onChange }
            placeholder='Enter Password'
            value={ props.form.password }
          />
        </label>
        <br />
        <input className='submit-input' type='submit' name='submit' value='Login' />

      </form>
    </div>
  )
}

export default UserOptions
