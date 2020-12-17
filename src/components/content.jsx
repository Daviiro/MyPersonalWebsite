import React, { Component } from 'react';
import './content.css';

class content extends Component {
  state = {};
  styles = {
    color: '#fff',
  };
  render() {
    return (
      <div className='content'>
        <span style={{ fontSize: 35, color: '#fff' }}>
          Sobre
          <br />
        </span>
        <span style={this.styles}>
          Atualmente não sei o que devo colocar aqui
          <br /> sendo assim irei colocar alguns gifs
          <br />
        </span>
        <img
          style={{ borderRadius: 50, width: 300, height: 300, padding: 10 }}
          src={process.env.PUBLIC_URL + '/gatinho.gif'}
          alt='gatinho'
        />
        <img
          style={{ borderRadius: 50, width: 300, height: 300, padding: 10 }}
          src={process.env.PUBLIC_URL + '/gatinho2.gif'}
          alt='gatinho'
        />
      </div>
    );
  }
}

export default content;
