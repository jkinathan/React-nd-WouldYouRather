import React, { Component } from 'react';
import Nav from './nav';
import Tabs from './Tabs';

export class Home extends Component {
  render() {
    return (
      <div>
            <Nav/>

            <Tabs/>
      </div>
    );
  }
}

export default Home;
