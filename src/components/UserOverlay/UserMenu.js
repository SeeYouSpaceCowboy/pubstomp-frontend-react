import React from 'react'

import LoginForm from './LoginForm'
import LogoutForm from './LogoutForm'
import UserMenuHeading from './UserMenuHeading'
import FinePrint from './FinePrint'

const UserMenu = ( props ) => {
  let user = props.user
  let show = props.show.userMenu ? 'user-menu-container' : 'hidden'

  let loginForm = (
    <div>
      <LoginForm
        show={ props.show.userMenu }
        user={ user }
        form={ props.form }
        onChange={ props.onChange }
        onLogin={ props.onLogin }
        />
      <FinePrint
        show={ show }
        user={ user }
        />
    </div>
  )

  let logoutForm = (
    <LogoutForm
      onLogout={ props.onLogout }
    />
  )

  let authorizationFormComponent = props.auth ? logoutForm : loginForm

  return (
    <div className={ show }>
      <UserMenuHeading
        user={ user }
        show={ props.show.userMenu }
        />
      { authorizationFormComponent }
    </div>
  )
}

export default UserMenu
