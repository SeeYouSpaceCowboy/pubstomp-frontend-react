import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/index'

import { Row, Col } from 'react-bootstrap'

import SignUpForm from '../components/Forms/SignUpForm'
import ProfileForm from '../components/Forms/ProfileForm'
import GamesForm from '../components/Forms/GamesForm'
import StepperComponent from '../components/SignUp/StepperComponent'
import Steps from '../components/SignUp/Steps'

import { onChange, onProfileChange, handleGenderChange, handleDateChange } from '../helpers/AuthHelpers'

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      finished: false,
      stepIndex: 0,
      form: {
        email: '',
        password: ''
      },
      profileForm: {
        username: '',
        dob: null,
        gender: "Secret"
      }
    };
  }

  componentWillMount() {
    //iterate thru steps to find current step, if complete route to feed.

  }

  handleNext = () => {
    const {stepIndex} = this.state;

    if(stepIndex === 0 && !this.props.auth.authentication) {
      this.props.actions.signUpUser( this.state.form )
    }

    if(stepIndex === 1 && this.props.auth.authentication) {
      this.props.actions.submitProfile( this.state.profileForm )
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
        return this.props.auth.authentication
          ? <p className='success-message'>Account was created successfully!</p>
          : (<SignUpForm
              onChange={ onChange.bind(this)}
              form={ this.state.form }
            />)
      case 1:
        return 'profile' in this.props.user
        ? <p className='success-message'>Profile was created successfully!</p>
        : (<ProfileForm
            onChange={ onProfileChange.bind(this)}
            form={ this.state.profileForm }
            handleGenderChange={handleGenderChange.bind(this)}
            handleDateChange={handleDateChange.bind(this)}
          />)
      case 2:
        return 'games' in this.props.user
        ? <p className='success-message'>Games were followed!</p>
        : (<GamesForm
            onChange={ onChange.bind(this)}
            form={ this.state.gamesForm }
          />)
      default:
        return 'An error has occurred.';
    }
  }

  render() {
    const { finished, stepIndex } = this.state;



    return (
      <Row className="feed">
        <Col xs={10} sm={8} md={8} lg={8} xsOffset={1} smOffset={2} mdOffset={2} lgOffset={2}>
          <div className='signup-container'>
            <StepperComponent activeStep={stepIndex} />
            <Steps
              finished={ finished }
              stepIndex={ stepIndex }
              getStepContent={ this.getStepContent.bind( this ) }
              handlePrev={ this.handlePrev }
              handleNext={ this.handleNext }
            />
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
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( SignUp )
