import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserOverlay from './UserOverlay'
import Navbar from '../containers/Navbar'
import Feed from '../containers/Feed'
import { Row, Col } from 'react-bootstrap'
import SignUp from './SignUp'
class App extends Component {

  render() {

    return (
      <div>
            <Navbar />
        <Row className="feed">
          <Col xs={10} sm={8} md={8} lg={8} xsOffset={1} smOffset={2} mdOffset={2} lgOffset={2}>
            <Feed />
          </Col>
        </Row>
        <SignUp />
      </div>
    )
  }
}

export default connect(
  null,
  null
  )( App )
