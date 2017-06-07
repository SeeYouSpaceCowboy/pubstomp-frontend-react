import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {

  render(){
    return (
      <div>
        <h3>404</h3>
        <h3>Page not found!</h3>
        <br/>
        <br/>
        <Link to='/'> Home </Link>
      </div>
    )
  }
}
