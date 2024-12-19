import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Dashboard></Dashboard>
    );
  }
}
