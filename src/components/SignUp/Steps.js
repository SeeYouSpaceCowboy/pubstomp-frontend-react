import React from 'react';
import { Link } from 'react-router-dom';

import Step from './Step'

const Steps = ( props ) => {

  let signupComplete = props.stepIndex > 2;
  let signupCompleteMessage = (
    <p className='success-message'>
      You are all finished. <Link to="/feed">Click here to see your feed</Link>
    </p>);

  return (
    <div className='step-container'>
      { signupComplete ?
        { signupCompleteMessage }
        : (<Step
            stepIndex={ props.stepIndex }
            finished={ props.finished }
            getStepContent={ props.getStepContent }
            handlePrev={ props.handlePrev }
            handleNext={ props.handleNext }
          />)
      }

    </div>
  )
}

export default Steps;
