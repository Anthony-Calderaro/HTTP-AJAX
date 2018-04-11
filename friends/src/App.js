import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './Components/FriendsList/FriendsList.js';
import axios from 'axios';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      name: '',
      age: '', 
      // make age a number only
      email: ''
    }
  }
  
  componentDidMount() {
    axios 
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ name: response.name })
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  
  
  
  render() {
    return (
      <div className="App">
      <FriendsList />
      <div>{this.state.name}</div>
      
      
      </div>
    );
  }
}

export default App;
