import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import MobileTearSheet from './MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

import arcadeahri from '../img/arcadeahri.png'
import diana from '../img/Diana.jpeg'
import overwatch from '../img/overwatch.png'
import rocketleague from '../img/rocketleague.png'


export default class FeedItemLeft extends Component {

  render(){
    return (
        <div className={"feeditemleft"}>
          <Col sm={6}>
            <div>
              <MobileTearSheet>
                <List>
                  <Subheader>Chat Menu</Subheader>
                  <ListItem
                    primaryText="Dominator27"
                    leftAvatar={<Avatar src={arcadeahri} />}
                    rightIcon={<CommunicationChatBubble />}
                  />
                  <ListItem
                    primaryText="GGWP"
                    leftAvatar={<Avatar src={diana} />}
                    rightIcon={<CommunicationChatBubble />}
                  />
                  <ListItem
                    primaryText="SurrenderAt15"
                    leftAvatar={<Avatar src={overwatch} />}
                    rightIcon={<CommunicationChatBubble />}
                  />
                  <ListItem
                    primaryText="2Fast2Furious"
                    leftAvatar={<Avatar src={rocketleague} />}
                    rightIcon={<CommunicationChatBubble />}
                  />
                </List>
              </MobileTearSheet>
            </div>
          </Col>

          <Col sm={6}>
            <div className="feeditemleft">
              <p>
                Hiiiii
              </p>
            </div>
          </Col>

        </div>
    )
  }
}
