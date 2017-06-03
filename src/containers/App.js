import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserOverlay from './UserOverlay'
import Navbar from '../components/Navbar/Navbar'
import Feed from '../containers/Feed'
import { Row, Col } from 'react-bootstrap';

class App extends Component {

  render() {

    return (
      <div>
        <Navbar />
        {/* <UserOverlay /> */}
        <Row>
          <Col sm={10} smOffset={1}>
            <Feed />
          </Col>
          {/* <Col sm={3}>
          </Col> */}
        </Row>
      </div>
    )
  }
}

export default connect(
  null,
  null
  )( App )
