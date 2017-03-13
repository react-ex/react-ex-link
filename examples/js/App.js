import React, { Component } from 'react';
import HelloWorld from '../../src';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HelloWorld />
      </div>
    );
  }
}
