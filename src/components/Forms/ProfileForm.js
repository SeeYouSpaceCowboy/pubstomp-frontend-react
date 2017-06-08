import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

class ProfileForm extends Component {

  constructor() {
    super();
  }

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
            value={this.props.form.dob}
            onChange={ this.props.handleDateChange }
            />
          <br />
          <SelectField
            name="gender"
            floatingLabelText="Gender"
            value={this.props.form.gender}
            onChange={ this.props.handleGenderChange }
            >
            <MenuItem value={"Male"} primaryText="Male" />
            <MenuItem value={"Female"} primaryText="Female" />
            <MenuItem value={"Secret"} primaryText="Secret" />
          </SelectField>
      </div>
    )
  }
}

export default ProfileForm
