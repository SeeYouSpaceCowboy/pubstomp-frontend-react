import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

class ProfileForm extends Component {

  constructor() {
    super();

    this.state = {
      value: 3,
      controlledDate: null
    };
  }

  handleGenderChange = (event, index, value) => this.setState({value});

  handleDateChange = (event, date) => {
    this.setState({
      controlledDate: date,
    });
  };

  render() {
    return (
      <div>
          <TextField
            name="username"
            value={this.props.form.username}
            onChange={ this.props.onChange }
            hintText=""
            floatingLabelText="Username"
          />
          <br />
          <DatePicker
            name="dob"
            hintText="Date of Birth"
            value={this.state.controlledDate}
            onChange={this.handleDateChange.bind(this)}
            />
          <br />
          <SelectField
            name="gender"
            floatingLabelText="Gender"
            value={this.state.value}
            onChange={this.handleGenderChange}
            >
            <MenuItem value={1} primaryText="Male" />
            <MenuItem value={2} primaryText="Female" />
            <MenuItem value={3} primaryText="Secret" />
          </SelectField>
      </div>
    )
  }
}

export default ProfileForm
