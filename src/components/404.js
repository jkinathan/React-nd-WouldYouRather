import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

class Page404 extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Header as="h3">Page Not Found 404 Error</Header>
        <p>The Page you are trying to view is not available.</p>
      </Container>
    );
  }
}

export default Page404;