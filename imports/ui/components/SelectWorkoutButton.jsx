// Import React
import React from 'react';
import { Component } from 'react';

// Import Material-ui
import RaisedButton from 'material-ui/RaisedButton';
// Import Style
import style from '../../../client/styles.js';


// Create Component
class SelectWorkoutButton extends Component {

  constructor(props) {
    super(props);
  }

  _handleClick(){
    this.props._selectWorkout(this.props._workoutObj);
  }


  render(){
    return(
      <div>
        <br />
        <RaisedButton label={this.props._workoutName} overlayStyle={style.overlaySelectWorkout} labelStyle={style.overlaySelectWorkout} primary={false} onClick={this._handleClick.bind(this)} />
        <br />
      </div>
    )
  }

}


export default SelectWorkoutButton;
