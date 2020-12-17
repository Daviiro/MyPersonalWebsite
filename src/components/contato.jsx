import React, { Component } from 'react';
import './contato.css';
import Form from 'react-bootstrap/Form';

class contact extends Component {
  state = {};
  render() {
    return (
      <>
        <div className='contato'>
          <span style={{ fontSize: 35, color: '#fff' }}>Area de contato</span>
          <form>
            <input type='E-mail' />
            <Form.Group controlId='formBasicEmail'>
              <Form.Label style={{ color: '#fff' }}>
                Endereço de Email
              </Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-muted'>
                Seu endereço de e-mail não será compartilhado.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label style={{ color: '#fff' }}>Area de texto</Form.Label>
              <Form.Control as='textarea' rows={3} />
            </Form.Group>
            <div>
              <button
                style={{ float: 'right' }}
                className='btn btn-secondary btn-sm'
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className='contatoDiv'></div>
      </>
    );
  }
}

export default contact;
