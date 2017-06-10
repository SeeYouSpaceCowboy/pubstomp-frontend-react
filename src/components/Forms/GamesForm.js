import React, { Component } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import {Card, CardActions, CardMedia} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Checkbox from 'material-ui/Checkbox';


// import TextField from 'material-ui/TextField'

class GamesForm extends Component {
  constructor() {
    super();
    this.state = {
      elementsArr: [],
      selectedGames: new Set()
    }
  }
  getGamesList() {
    var elements = []
    let url = 'https://api.twitch.tv/kraken/games/top?limit=20&client_id=5tomyl16m18fgl444stt7mqf5np03x'
    axios.get(url)
        .then( response => {
          let gamesList = response.data.top
          for( let i = 0; i < response.data.top.length; i++) {
            elements.push([gamesList[i].game.name,gamesList[i].game.box.medium, gamesList[i].game._id])
            }
            this.setState({elementsArr: elements})
          })
        .catch( err => console.error( err.message ) );
    }

    printGamesList() {
      if(this.state.elementsArr.length === 0){
        this.getGamesList()
      }
    }

    spinner() {
      return (
        <div>
          <CircularProgress size={80} thickness={5} />
        </div>
      )
    }

    getOffSet(index) {
      if(index === 0 || index % 5 === 0) {
        return 1
      } else {
        return 0
      }
    }

    toggleFavorite(id) {
      if(this.state.selectedGames.has(id)) {
        this.state.selectedGames.delete(id)
      } else {
        this.state.selectedGames.add(id)
      }
    }

    gamesRows() {
      let rows = this.state.elementsArr.map((currElement, index) => {
        return (
          <div>
          <Col className="gamelist" key={index} sm={2} smOffset={this.getOffSet(index)}>
            <Card>
              <CardMedia>
                <img src={this.state.elementsArr[index][1]} alt='hi'/>
              </CardMedia>
              <CardActions>
                <div className="gamelist-checkbox" >
                  <Checkbox style={{ display: "flex"}}
                    onCheck={() => {
                      this.toggleFavorite(this.state.elementsArr[index][2])
                      this.props.onChange(this.state.selectedGames)
                    }}
                    id={this.state.elementsArr[index][2]}
                    disableTouchRipple
                    disableFocusRipple
                    checkedIcon={<ActionFavorite />}
                    uncheckedIcon={<ActionFavoriteBorder />}
                  />
                </div>
              </CardActions>
            </Card>
          </Col>
        </div>
    )})
    return rows
  }

  render() {
    return (
      <div>
        <p className='success-message'>Select Your Games!</p>
          {this.state.elementsArr.length === 0 ? this.spinner() : null}
            {this.printGamesList()}
            {this.gamesRows()}
      </div>
    )
  }
}

export default GamesForm
