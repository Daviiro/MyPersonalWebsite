import React, { Component } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

class footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <div className='footer__social'>
          <a href='https://www.instagram.com/'>
            <FaInstagram size='40' color='rgb(255,255,255)' />
          </a>
          <a href='https://www.youtube.com/'>
            <FaYoutube size='40' color='rgb(255,255,255)' />
          </a>
          <a href='https://www.facebook.com/'>
            <FaFacebook size='40' color='rgb(255,255,255)' />
          </a>
          <a href='https://github.com/Daviiro/'>
            <FaGithub size='40' color='rgb(255,255,255)' />
          </a>
        </div>
        <div id='cop'>
          <span
            style={{
              color: '#fff',
              fontSize: 14,
            }}
          >
            Copyright © 2020 Daviiro. None rights reserved.
          </span>
        </div>
      </footer>
    );
  }
}

export default footer;
