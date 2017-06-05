import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions/index'
import SignUpForm from '../components/SignUp/SignUpForm'
import { Row, Col } from 'react-bootstrap'
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class SignUp extends Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;

    if(stepIndex == 0 && !this.props.auth.authenticated) {
      this.props.signUpUser
    }

    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return this.props.auth.authenticated ? "Account created successfully" : (<SignUpForm />)
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <Row className="feed">
        <Col xs={10} sm={8} md={8} lg={8} xsOffset={1} smOffset={2} mdOffset={2} lgOffset={2}>
          <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
            <Stepper activeStep={stepIndex}>
              <Step>
                <StepLabel>Create Your Account</StepLabel>
              </Step>
              <Step>
                <StepLabel>Choose 3 Games (or more!)</StepLabel>
              </Step>
              <Step>
                <StepLabel>Pick An Avatar</StepLabel>
              </Step>
            </Stepper>
            <div style={contentStyle}>
              {finished ? (
                <p>
                  <a href="http://www.google.com"> Click here </a> to reset the example.
                </p>
              ) : (
                <div>
                  <p>{this.getStepContent(stepIndex)}</p>
                  <div style={{marginTop: 12}}>
                    <FlatButton
                      label="Back"
                      disabled={stepIndex === 0}
                      onTouchTap={this.handlePrev}
                      style={{marginRight: 12}}
                    />
                    <RaisedButton
                      label={stepIndex === 2 ? 'Done!' : 'Next'}
                      primary={true}
                      onTouchTap={this.handleNext}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    user: state.user
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    actions: bindActionCreators(Actions, dispatch)
})}

export default connect( mapStateToProps, mapDispatchToProps )(SignUp)
