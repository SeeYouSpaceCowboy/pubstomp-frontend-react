import React from 'react';

const UserMenuHeading = ( props ) => {
  let user = props.user ? props.user : null;
  let show = props.show ? 'user-menu-heading' : 'no-display';
  let text = user ? user.email : 'Not Logged In';

  return (
    <div className={ show }>
      <span className='user-menu-heading-text'>{ text }</span>
    </div>
  )
}

export default UserMenuHeading;
