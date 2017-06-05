import React from 'react'

const LogoutForm = ( props ) => {

  let show = props.show ? 'logout-form-container' : 'no-display'

  return (
    <div className={ show } >
      <form className='logout-form' onSubmit={ props.onLogout } >
        <input className='submit-input' type='submit' name='submit' value='Logout' />
      </form>
    </div>
  )
}

export default LogoutForm
