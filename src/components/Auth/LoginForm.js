import React from 'react'
import TextField from 'material-ui/TextField'


const LoginForm = ( props ) => {

  let errorMessage = ''
  let errorDisplay = props.error ? ( <span className='error-text'>{ errorMessage }</span>) : ''

  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={ props.onLogin } >
        <div>
            <TextField
              name="email"
              value={props.form.email}
              onChange={ props.onChange }
              hintText="You@Gmail.com"
              floatingLabelText="E-mail"
            />
            <br />
            <TextField
              name="password"
              value={props.form.password}
              onChange={ props.onChange }
              hintText="Don't Use Password"
              floatingLabelText="Password"
              type={"password"} />
        </div>
        { errorDisplay }
        <input className='submit-input' type='submit' name='submit' value='Login' />
      </form>
    </div>
  )
}

export default LoginForm
