import React from 'react';

import {Step, Stepper, StepLabel} from 'material-ui/Stepper';

const StepperHeaderComponent = ( props ) => {

  return (
    <div>
      <Stepper activeStep={props.activeStep}>
        <Step>
          <StepLabel>Create Your Account</StepLabel>
        </Step>
        <Step>
          <StepLabel>Create Your Profile</StepLabel>
        </Step>
        <Step>
          <StepLabel>Choose 3 Games (or more!)</StepLabel>
        </Step>
      </Stepper>
    </div>
  )
}

export default StepperHeaderComponent;
