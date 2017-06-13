import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset'
import CommunicationChat from 'material-ui/svg-icons/communication/chat'
import ActionAccessibility from 'material-ui/svg-icons/action/accessibility'

export default class ServiceBox extends Component {

  render(){
    return (
        <div>
          <Col sm={4}>
            <div className="serviceBox">
              <div className="service-icon">
                <HardwareVideogameAsset className="fa fa-globe" />
              </div>
              <div className="service-content">
                <h3>Tell Us What You Love</h3>
                <p>
                  When you sign up, we'll give you a list of games to choose. Start with 3 games to begin making connections to players around the world who love the same games as you do.
                </p>
              </div>
            </div>
          </Col>

          <Col sm={4}>
            <div className="serviceBox">
              <div className="service-icon">
                <ActionAccessibility className="fa fa-globe" />
              </div>
              <div className="service-content">
                <h3>Gamer Profile</h3>
                <p>
                  Sometimes millions of players love a game. By adjusting profile settings, you choose to meet players nearby or across an ocean. Tons of customizable options will help you find new friends to play around the same times with the similar interests.
                </p>
              </div>
            </div>
          </Col>

          <Col sm={4}>
            <div className="serviceBox">
              <div className="service-icon">
                <CommunicationChat className="fa fa-globe" />
              </div>
              <div className="service-content">
                <h3>Start A Conversation</h3>
                <p>
                  With our built in chat application, reaching out through PubStomp will give another player a heads up before contacting them in game.
                </p>
              </div>
            </div>
          </Col>
        </div>
    )
  }
}
