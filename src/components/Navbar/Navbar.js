import React from 'react'
import {Row, Col, Button} from 'elemental'

const Navbar = ( props ) => (
    <div className='navbar'>
      <Row>
        <Col sm="1/4">
          <Button size="lg" type="hollow-primary">PubStomp</Button>
        </Col>
        <Col sm="1/2">
          <Row>
          	<Col sm="1/3">
          		<Button size="lg" type="hollow-primary">Games</Button>
          	</Col>
          	<Col sm="1/3">
          		<Button size="lg" type="hollow-primary">Players</Button>
          	</Col>
          	<Col sm="1/3">
          		<Button size="lg" type="hollow-primary">Search</Button>
          	</Col>
          </Row>
        </Col>
            <Col sm="1/4">
              <Button size="lg" type="hollow-primary">Search</Button>
            </Col>
        </Row>
    </div>
)

export default Navbar
