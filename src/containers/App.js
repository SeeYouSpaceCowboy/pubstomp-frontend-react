import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from '../actions/index'

import ErrorComponent from '../components/Error'
import Header from '../components/Header'
import UserOverlay from './UserOverlay'

// const io = require('socket.io-client')

class App extends Component {
  constructor() {
    super()

    this.state = {
      socket: null
    };

  }

  componentWillMount() {
    // UNCOMMENT WHEN SOCKETS ARE READY TO GO
    // const socket = io.connect('http://localhost:4000');
    // const socket = io.connect('https://pubstomp.herokuapp.com');

    // this.setState({
    //   socket: socket
    // });

  }

  render() {
    const { actions } = this.props
    const user = this.props.user && 'username' in this.props.user ? this.props.user : null

    // UNCOMMENT WHEN SOCKETS ARE READY TO GO
    // if ( !this.state.socket ) { return <div>Loading...</div> }

    return (
      <div>
        <Header />
        <ErrorComponent
          show={ false }
          message={ null }
          />
        <UserOverlay
          user={ user }
          actions={ actions }
          />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    actions: bindActionCreators(Actions, dispatch)
})}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )( App )
