import React from 'react'

const LoginForm = ( props ) => {

  return (
    <div>
      <form onSubmit={ props.onSubmit } >

        <label className='email-label'>Username
        <input className='login-input' name='email' type='text' onChange={ props.onChange } value={ props.inputs.email } />
        </label>

        <label className='password-label'>Password
        <input className='login-input' name='password' type='password' onChange={ props.onChange } value={ props.inputs.password } />
        </label>

        <input className='login-submit' type='submit' value='Login' />
      </form>
    </div>
  )
}

export default LoginForm
