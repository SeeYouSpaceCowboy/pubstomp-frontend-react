import React, {Component} from 'react'
import TextField from 'material-ui/TextField';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
// import {Row, Col, Button} from 'react-bootstrap'
// import RaisedButton from 'material-ui/RaisedButton';
// import Avatar from 'material-ui/Avatar';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  handleChange = (event, index, value) => this.setState({value})

  loggedInToolBar() {
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
          <MenuItem primaryText="Logout" />
          <MenuItem primaryText="Account Settings" />
        </IconMenu>
        <ActionAccountCircle />
      </ToolbarGroup>
    </Toolbar>
    )
  }

  loggedOutToolBar() {
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
          <MenuItem primaryText="Login" />
          <MenuItem primaryText="Create Account" />
        </IconMenu>
        <ActionAccountCircle />
      </ToolbarGroup>
    </Toolbar>
    )
  }


  render() {
    return (
      this.loggedOutToolBar()
    )
  }
}

export default Navbar
