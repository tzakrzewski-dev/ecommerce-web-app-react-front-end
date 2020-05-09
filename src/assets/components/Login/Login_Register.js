import React, { Component } from 'react';
import { Form, Button, Container, Tabs, Sonnet, Tab } from 'react-bootstrap';

class Login_Register extends Component {
  render() {
    return (
      <Container>
        <Tabs defaultActiveKey="register" id="uncontrolled-tab-example">
          <Tab eventKey="Inscription" title="Je crée mon compte">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Adresse Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Veuillez entrer votre email"
                  name="email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Veuillez saisir votre nom d'utilisateur"/>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Veuillez saisir votre mot de passe"
                />
              </Form.Group>
              <Button variant="info" type="submit">
                Je valide
              </Button>
            </Form>
          </Tab>
          <Tab eventKey="identity" title="Identification">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Adresse Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Veuillez entrer votre email" name="email"/>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Veuillez saisir votre mot de passe"/>
              </Form.Group>
              <Button variant="info" type="submit">
                Je valide
              </Button>
            </Form>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default Login_Register;
