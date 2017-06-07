import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/index'

import { Carousel } from 'react-bootstrap'
import lol from '../img/lol.jpg'
import overwatch from '../img/overwatch.jpg'
import ServiceBox from '../components/ServiceBox'

class App extends Component {

  render() {
    return (
      <div>
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
       <ServiceBox />
      </div>
    )
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    actions: bindActionCreators(Actions, dispatch)
  })
}

export default connect(
  null,
  mapDispatchToProps
  )( App )
