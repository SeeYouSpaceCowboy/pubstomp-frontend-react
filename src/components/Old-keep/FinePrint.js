import React from 'react';

const FinePrint = ( props ) => {
  let show = props.show ? 'fine-print' : 'no-display';
  show = props.user ?  'invisible' : show;
  let finePrint = 'Need an account? Sign up here'

  return (
    <div className={ show }>
      { finePrint }
    </div>
  )
}

export default FinePrint;
