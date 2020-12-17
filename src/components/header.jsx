import React, { Component } from 'react';
import NavBar from './navbar';
import './header.css';

class header extends Component {
  state = {};
  render() {
    return (
      <div className='header'>
        <NavBar></NavBar>
      </div>
    );
  }
}

export default header;
