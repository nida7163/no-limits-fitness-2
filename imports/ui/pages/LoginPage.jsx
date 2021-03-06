import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import setSnackBar from '../../actions/snackbar.js';
import Store from '../../reducers/index';
import style from '../../../client/styles.js';



export default class LoginPage extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let name = document.getElementById("login-name").value;
    let password = document.getElementById('login-password').value;
    Meteor.loginWithPassword(name, password, (err) => {
      if(err){
        Store.dispatch(setSnackBar(true, err.reason, '#FF0000'));
      } else {
        Store.dispatch(setSnackBar(true, 'You\'ve been signed in successfully.', '#DAA520'));
        browserHistory.push('/dashboard');
      }
    });
  }

  render(){

    const buttonStyle = {
      marginTop: "20px",
    }

    return (
      <div className="row-fluid" style={style.loginStyle}>
        <div className="col-xs-12 col-lg-6 col-lg-offset-3">
          <h1 style={style.headerStyle}>Login Page</h1>
        </div>
        <form name="loginForm" id="login-form" className="col-xs-12 col-lg-6 col-lg-offset-3">
          <TextField
            hintText="Please enter your username"
            floatingLabelText="Username"
            id="login-name"
            fullWidth={true}
            floatingLabelFocusStyle={style.floatingLabelUsername}
            inputStyle={style.inputStyleUsername}
          />
          <br />
          <TextField
            hintText="Please enter your password"
            floatingLabelText="Password"
            type="password"
            id="login-password"
            fullWidth={true}
            floatingLabelFocusStyle={style.floatingLabelPassword}
            inputStyle={style.inputStyleUsername}

          />
          <br />
          <RaisedButton
            id="login-button"
            label="login"
            fullWidth={true}
            primary={false}
            overlayStyle={style.overlayStyle}
            onTouchTap={this.handleSubmit}
          />
          <br />
          <p className="text-center"> Don't have an account? Register <Link to="/users/signup">here</Link></p>
          <br />
        </form>
      </div>
    );
  }
}