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
        Store.dispatch(setSnackBar(true, 'You\'ve been signed out successfully.', '#DAA520'));
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
<<<<<<< HEAD
          backgroundColor:'black',
=======
          backgroundColor:'black'
>>>>>>> 4c39c191a74fd5724a40197e9296676ea61d00f2
        }}
        titleStyle = {{
          textAlign: 'center',
          fontFamily: 'Nova Flat',
<<<<<<< HEAD
          color:'#DAA520',
=======
          color:'#D50000',
>>>>>>> 4c39c191a74fd5724a40197e9296676ea61d00f2
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
