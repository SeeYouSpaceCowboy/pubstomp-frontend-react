import React from 'react';

const Avatar = ( props ) => {
  let user = props.user ? props.user : null;
  let avatarLetter = user ? user.email[0].toUpperCase() : '?';
  let avatar = (<span className='avatar-text no-select'>{ avatarLetter }</span>);
  let avatarImg = user && 'avatar' in user ? <img src={ user.avatar } className='avatar-img' alt='avatar-img' /> : avatar;

  return (
    <div className='avatar' onClick={ props.handleAvatarClick }>
      { avatarImg }
    </div>
  )
}

export default Avatar;
