import React from 'react'

const Error = ( props ) => {
  let showError = props.show ? 'error noselect' : 'hidden'

  return (
    <div className={ showError }>
      <p>{ props.message }</p>
    </div>
  )
}

export default Error
