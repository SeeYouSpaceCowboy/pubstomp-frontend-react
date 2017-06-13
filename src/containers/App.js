import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/index'
import { Carousel, Grid, Row } from 'react-bootstrap'
import Divider from 'material-ui/Divider';
import lol from '../img/lol.jpg'
import overwatch from '../img/overwatch.jpg'
import ServiceBox from '../components/ServiceBox'
import FeedItemLeft from '../components/FeedItemLeft'
import MultipleItems from '../components/MultipleItems'



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


       <Grid>

         <Row>
           <ServiceBox />
         </Row>

         <Row>
           <Divider />
         </Row>

         <Row>
           <FeedItemLeft />
         </Row>

         <Row>
           <Divider />
         </Row>

         <p className="index-p"> What people are playing right now: </p>
         <MultipleItems />

       </Grid>
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
