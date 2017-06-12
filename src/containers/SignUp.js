import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/index'

import { Row, Col } from 'react-bootstrap'

import SignUpForm from '../components/Forms/SignUpForm'
import ProfileForm from '../components/Forms/ProfileForm'
import GamesForm from '../components/Forms/GamesForm'
import StepperHeaderComponent from '../components/SignUp/StepperHeaderComponent'
import Steps from '../components/SignUp/Steps'

import { onChange, onProfileChange, onGameChange, handleGenderChange, handleDateChange } from '../helpers/AuthHelpers'

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
      },
      gamesForm: {
        selectedGames: {},
      }
    };
  }

  componentWillMount() {
    //iterate thru steps to find current step, if complete route to feed.
    let stepIndex = 0;

    if ( this.props.auth.authentication ) {
      stepIndex = 1;
    }

    if ( 'profile' in this.props.user ) {
      stepIndex = 2;
    }

    if ( 'games' in this.props.user && this.props.user.games.length >= 2 ) {
      this.props.history.push('/feed');
    }

    this.setState({ stepIndex: stepIndex });
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    if(stepIndex === 0 && !this.props.auth.authentication) {
      this.props.actions.signUpUser( this.state.form )
    }

    if(stepIndex === 1 && this.props.auth.authentication) {
      this.props.actions.submitProfile( this.state.profileForm )
    }

    if(stepIndex === 2 && this.props.auth.authentication) {
      this.props.actions.updateGames( this.state.gamesForm )
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

  completedCurrentStep( stepIndex ) {
    let finished = false
    switch ( stepIndex ) {
      case 0:
        finished = this.props.auth.authentication;
        break;
      case 1:
        finished = 'profile' in this.props.user;
        break;
      case 2:
        finished = 'games' in this.props.user;
        break;
      default:
        console.error('An error has occurred determining step status.');
    };
    return finished;
  }

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
        return 'profile' in this.props.user && this.props.user.profile
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
            selectedGames={this.state.gamesForm.selectedGames}
            onChange={ onGameChange.bind(this)}
            form={ this.state.games }
          />)
      default:
        return 'An error has occurred.';
    }
  }

  render() {
    const { stepIndex } = this.state;
    console.log( this.props )
    return (
      <Row className="feed">
        <Col xs={10} sm={8} md={8} lg={8} xsOffset={1} smOffset={2} mdOffset={2} lgOffset={2}>
          <div className='signup-container'>
            <StepperHeaderComponent activeStep={stepIndex} />
            <Steps
              stepIndex={ stepIndex }
              finished={ this.completedCurrentStep.call(this, stepIndex) }
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
)( withRouter( SignUp ) )
