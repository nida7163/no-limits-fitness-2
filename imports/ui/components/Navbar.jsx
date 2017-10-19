import React from 'react';
import { IndexLink, Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Store from '../../reducers/index.js';
import style from '../../../client/styles.js';

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
        title= "Swolely Grail"
        onLeftIconButtonTouchTap= {this._toggleAppDrawer}
        zDepth= {1}
        onTitleTouchTap= {this._goToDashboard}
        style= {{
          position: 'fixed', top: 0,
          backgroundColor:'black',
          hoverColor:"goldenrod"
        }}
        titleStyle = {{
          textAlign: 'center',
          fontFamily: 'Nova Flat',
          color:'#DAA520',
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
