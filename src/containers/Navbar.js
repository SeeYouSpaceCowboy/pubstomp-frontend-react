import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/index'
import { withRouter } from 'react-router-dom';

import TextField from 'material-ui/TextField';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import { onLogout } from '../helpers/AuthHelpers'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  handleChange = (event, index, value) => this.setState({value})

  navbar() {
    return this.defaultNavbar( this.props.auth.authentication ? this.loggedInUserDropDown() : this.loggedOutUserDropDown() )
    }

  loggedInUserDropDown() {
    return (
      <div>
        <MenuItem primaryText="Logout" onClick={ onLogout.bind(this)} />
        <MenuItem primaryText="Account Settings" />
      </div>
    )
  }

  loggedOutUserDropDown() {
    return (
      <div>
        <MenuItem primaryText="Login" onClick={ () => { this.props.history.push("/login") } } />
        <MenuItem primaryText="Create Account" onClick={ () => { this.props.history.push("/signup") } } />
      </div>
    )
  }

  defaultNavbar( userDropDown ) {
    return (
      <Toolbar className="material-navbar">
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Home" />
            <MenuItem value={2} primaryText="Games" />
            <MenuItem value={3} primaryText="Players" />
            <MenuItem value={4} disabled={true}>
              <TextField
                hintText="Overwatch"
                floatingLabelText="Search"
              />
            </MenuItem>
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="PubStomp" />
          <ToolbarSeparator />
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            { userDropDown }
          </IconMenu>
          <ActionAccountCircle />
        </ToolbarGroup>
      </Toolbar>
    )
  }

  render() {
    return (
      this.navbar()
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    actions: bindActionCreators(Actions, dispatch)
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( withRouter( Navbar ) )
