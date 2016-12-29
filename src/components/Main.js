import React, { Component } from 'react';

import { Link } from 'react-router';
import { Header, Container } from 'semantic-ui-react'

import { app } from '../store';

class Main extends Component {

  componentDidMount() {
    const tacoService = app.service('tacos');
    tacoService.on('created', (taco) => this.props.newTaco(taco))
  }

  render() {
    return (
      <Container>
        <Header as="h1" textAlign="center">
          <Link to="/">Tacos!</Link>
        </Header>
        {React.cloneElement(this.props.children, this.props)}
      </Container>
    )
  }
}

export default Main;

