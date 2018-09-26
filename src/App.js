import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import CardList from './components/Cardlist';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Card />
      <CardList />
    </React.Fragment>
    );
  };
};

export default App;
