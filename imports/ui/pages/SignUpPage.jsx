import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import setSnackBar from '../../actions/snackbar.js';
import Store from '../../reducers/index';
import style from '../../../client/styles.js';

export default class SignUpPage extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e){
    e.preventDefault();
    let name = document.getElementById("signup-name").value;
    let password = document.getElementById("signup-password").value;
    Accounts.createUser({username: name, password: password}, (err) => {
      if(err){
        Store.dispatch(setSnackBar(true, err.reason, '#FF0000'));
      } else {
        Store.dispatch(setSnackBar(true, 'You\'ve signed up successfully.', '#DAA520'));
        Meteor.call('addUser');
        browserHistory.push('/dashboard');
      }
    });
  }

  render(){

    const buttonStyle = {
      marginTop: "20px",
      backgroundColor:"#DAA520"
    }

    return (
      <div className="row-fluid" style={style.signupStyle}>
        <div className="col-xs-12 col-lg-6 col-lg-offset-3">
          <h1 style={style.headerStyle}>Sign Up</h1>
        </div>
        <form name="loginForm" id="signup-form" className="col-xs-12 col-lg-6 col-lg-offset-3">
          <TextField
            hintText="Please enter your username"
            floatingLabelText="Username"
            id="signup-name"
            fullWidth={true}
          />
          <br />
          <TextField
            hintText="Please enter your password"
            floatingLabelText="Password"
            type="password"
            id="signup-password"
            fullWidth={true}
          />
          <br />
          <RaisedButton
            id="signup-button"
            label="signup"
            fullWidth={true}
            primary={false}
            overlayStyle={style.overlayStyleSignUp}
            onTouchTap={this.handleSubmit}
          />
          <br />
          <p className="text-center"> Already have an account? Login <Link to="/users/login">here</Link></p>
          <br />
        </form>
      </div>
    );
  }
}
