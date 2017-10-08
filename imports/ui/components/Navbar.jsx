import React from 'react';
import { IndexLink, Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Store from '../../reducers/index.js';

var NavBar = React.createClass({

  _goToDashboard: function(){
    browserHistory.push('/dashboard');
  },

  _toggleAppDrawer: function(){
    Store.dispatch({
      type: "OPEN_DRAWER",
      open: true
    });
  },

  _handleLogout(e){
    e.preventDefault();
    Meteor.logout(function(err){
      if(!err){
        browserHistory.push('/users/login');
        Store.dispatch(setSnackBar(true, 'You\'ve been signed out successfully.', '#4CAF50'));
      }
    });
  },


  render: function() {
    return (
      
      <AppBar
        className= "navbar"
        title= "No Limits Fitness 2.0"
        onLeftIconButtonTouchTap= {this._toggleAppDrawer}
        zDepth= {1}
        onTitleTouchTap= {this._goToDashboard}
        style= {{
          position: 'fixed', top: 0,
          backgroundColor: '#263238' 
        }}
        titleStyle = {{
          textAlign: 'center',
          fontFamily: 'Raleway',
          fontSize: 40,
          padding: 10
        }}
        iconElementRight = { Meteor.user() != null ? <FlatButton label="Log Out" /> : <FlatButton label="Login" />}
        onRightIconButtonTouchTap = {this._handleLogout} 
      />

    ); 
  }
});

export default NavBar;
