import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Cardlist from './components/Cardlist';
import FormContainer from './containers/FormContainer';

class App extends Component {
  state = {
    cards: []
  };

addNewCard = (cardInfo) => {
  this.setState(prevState => ({
    cards: prevState.cards.concat(cardInfo)
  }));
};

render() {
  return (
    <div>
      <h1>GitHub card generator</h1>
      <FormContainer onSubmit={this.addNewCard}/>
      <Cardlist cards={this.state.cards}/>
    </div>
    );
  };
};

export default App;
