import React from 'react'

import SessionForm from './SessionForm'
import UserMenuHeading from './UserMenuHeading'
import FinePrint from './FinePrint'

const UserMenu = ( props ) => {
  let user = props.user
  let show = props.show.userMenu ? 'user-menu-container' : 'hidden'

  return (
    <div className={ show }>
      <UserMenuHeading
        user={ user }
        show={ props.show.userMenu }
        />
      <SessionForm
        show={ props.show.userMenu }
        user={ user }
        form={ props.form }
        onChange={ props.onChange }
        onSubmit={ props.onSubmit }
        />
      <FinePrint
        show={ show }
        />
    </div>
  )
}

export default UserMenu
