import React from 'react'

import Avatar from './Avatar'
import UserMenu from './UserMenu'

const UserOverlay = ( props ) => {

  return (
    <div className='user-overlay-container'>
      <Avatar
        user={ props.user }
        handleAvatarClick={ props.handleAvatarClick }
      />
      <UserMenu
        show={ props.show }
        user={ props.user }
        form={ props.form}
        onChange={ props.onChange }
        onSubmit={ props.onSubmit }
        onLogout={ props.onLogout }
        />
    </div>
  )
}

export default UserOverlay
