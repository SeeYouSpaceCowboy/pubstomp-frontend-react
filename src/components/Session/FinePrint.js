import React from 'react';

const FinePrint = ( props ) => {
  let show = props.show ? 'fine-print' : 'no-display';
  show = props.user ?  'no-display' : show;
  let finePrint = 'Sign up or Login from form above'

  return (
    <div className={ show }>
      { finePrint }
    </div>
  )
}

export default FinePrint;
