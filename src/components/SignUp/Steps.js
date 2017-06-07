import React from 'react';
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const Steps = ( props ) => {

  return (
    <div className='step-container'>

      { props.finished ? (
        <p className='success-message'>You are all finished. <Link to="/feed">Click here to see your feed</Link></p>
      ) : (
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
              label={props.stepIndex === 2 ? 'Finish!' : 'Submit'}
              primary={true}
              onTouchTap={props.handleNext}
            />
          </div>
        </div>
      )}

    </div>
  )
}

export default Steps;
