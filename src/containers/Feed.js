import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
import lol from '../img/lol.jpg'
import overwatch from '../img/overwatch.jpg'
// import {Row, Col, Button} from 'elemental'

class Feed extends Component {

  render() {
    return (
      <div className="feed">
        <Carousel>
          <Carousel.Item>
            <img width={1920} height={1080} alt="1920x1080" src={lol} />
         </Carousel.Item>
         <Carousel.Item>
           <img width={1920} height={1080} alt="1920x1080" src={overwatch} />
         </Carousel.Item>

       </Carousel>
      </div>
    )
  }
}

export default Feed
