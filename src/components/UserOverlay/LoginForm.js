import React from 'react'

const LoginForm = ( props ) => {

  let show = props.show ? 'login-form-container' : 'no-display'

  let errorMessage = ''
  let errorDisplay = props.error ? ( <span className='error-text'>{ errorMessage }</span>) : ''

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
        { errorDisplay }
        <input className='submit-input' type='submit' name='submit' value='Login' />
      </form>
    </div>
  )
}

export default LoginForm
