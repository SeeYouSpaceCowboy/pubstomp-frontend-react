import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/index'
import { withRouter } from 'react-router-dom';

class Feed extends Component {

  componentWillMount() {
    if ( !this.props.auth.authentication ) {
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <span style={{textAlign: 'center'}}>
          This will be a protected route for only logged in users.
        </span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    auth: state.auth
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
)( withRouter( Feed ) )
