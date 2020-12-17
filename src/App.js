import React, { Component } from 'react';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import Contato from './components/contato';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='HEADER'>
          <Header></Header>
        </div>
        <div className='CONTENT'>
          <Content></Content>
        </div>
        <div className='CONTATO'>
          <Contato></Contato>
        </div>
        <div className='FOOTER'>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;
