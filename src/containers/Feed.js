import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
import lol from '../img/lol.jpg'
import overwatch from '../img/overwatch.jpg'
// import {Row, Col, Button} from 'elemental'

class Feed extends Component {

  render() {
    return (
        <Carousel className="feed"
          interval={2500}
          controls={false}
          indicators={false}
          >
          <Carousel.Item controls={false}>
            <img width={1920} height={1080} alt="1920x1080" src={lol} />
         </Carousel.Item>
         <Carousel.Item controls={false}>
           <img width={1920} height={1080} alt="1920x1080" src={overwatch} />
         </Carousel.Item>
       </Carousel>
    )
  }
}

export default Feed
