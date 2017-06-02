import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'elemental'

import UserOverlay from './UserOverlay'
import Navbar from '../components/Navbar/Navbar'
import Feed from '../containers/Feed'

class App extends Component {

  render() {

    return (
      <div>
        <Navbar />
        <UserOverlay />
        <Row>
          <Col sm="3/4">
            <Feed />
          </Col>
          <Col sm="1/4">
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(
  null,
  null
  )( App )
