import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col } from 'elemental'

import * as Actions from '../actions/index'

import UserOverlay from './UserOverlay'
import Navbar from '../components/Navbar'
import Feed from '../containers/Feed'


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
    const user = this.props.user && 'email' in this.props.user ? this.props.user : null

    // UNCOMMENT WHEN SOCKETS ARE READY TO GO
    // if ( !this.state.socket ) { return <div>Loading...</div> }

    return (
      <div>
        <Navbar />
        <Row>
          <Col sm="3/4">
            <Feed />
          </Col>
          <Col sm="1/4">
            <UserOverlay
              user={ user }
              actions={ actions }
            />
          </Col>
        </Row>
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
