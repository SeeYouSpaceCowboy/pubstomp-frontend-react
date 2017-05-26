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
        form={ props.form}
        onChange={ props.onChange.bind( this ) }
        onSubmit={ props.onSubmit.bind( this ) }
        onLogout={ props.onLogout.bind( this ) }
        />
    </div>
  )
}

export default UserOverlay
