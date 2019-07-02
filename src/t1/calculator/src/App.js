import React, { Component } from 'react';

import './App.css';

import Display from './components/Display';
import ButtonGroup from './components/ButtonGroup';

export default class App extends Component {
  state = {
    total: null,
    nextValue: null
  };

  handleClick(buttonName) {
    console.log(buttonName);
  }

  render() {
    const { nextValue, total } = this.state;

    return (
      <table className="calc">
        <Display value={nextValue || total || '0'} />
        <ButtonGroup handleClick={this.handleClick} />
      </table>
    );
  }
}
