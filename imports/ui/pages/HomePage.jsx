// Import React
import React from 'react';
import { Component } from 'react';
import style from '../../../client/styles.js';

// Import React Grid System
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

// Import Material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


class HomePage extends Component {

  render() {

    const buttonStyle = {
      margin: '10px',

    }

    return (
      <Container>
        <div style={style.homepageStyleDiv}>

          <Card style={style.cardStyle}>
            <CardHeader title="Welcome to Swolely Grail! A workout junkie's BFF.
              Tracking your workout progress just got 10 sets easier! We've made it easier for you to create personalized routines and log your workouts.
              To get started please signup and if you're a returning user simply login." titleStyle={style.homepageStyle}
            />
            <CardActions>
              <Row>
                <center>

                  <RaisedButton overlayStyle={style.overlayStyleSignUp} label="Signup" secondary={false} href="users/signup"/>
                  <RaisedButton overlayStyle={style.overlayStyleLoginIn} label="Login" primary={false} href="users/login"/>

                </center>
              </Row>
            </CardActions>
            <CardMedia>

              <img src="img/workout.gif" />

            </CardMedia>
          </Card>

        </div>
      </Container>
    );

  }

};

export default HomePage;
