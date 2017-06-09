import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const Step = ( props ) => {

  return (
    <div>
      <div>{ props.getStepContent(props.stepIndex) }</div>

      <div className='step-buttons-container'>
        <FlatButton
          label="Back"
          disabled={props.stepIndex === 0}
          onTouchTap={props.handlePrev}
          style={{marginRight: 12}}
        />
        <RaisedButton
          label={ props.finished ? 'Next' : 'Submit'}
          primary={true}
          onTouchTap={props.handleNext}
        />
      </div>
    </div>
  )
}

export default Step;
