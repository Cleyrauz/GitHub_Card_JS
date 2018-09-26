import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Cardlist from './components/Cardlist';

let data = [
  {
    name: "Cleyra Uzcategui",
    id: 31991473,
    avatar_url: "https://avatars0.githubusercontent.com/u/31991473?v=4",
    company: "CodeClan"
  },
  {
    name: "Jose Calderon",
    id: 14239560,
    avatar_url: "https://avatars0.githubusercontent.com/u/14239560?v=4",
    company: "JP Morgan"
  },
];

class App extends Component {
  render() {
    return (
      <div>
        <h1>GitHub card generator</h1>
       <Cardlist cards={data}/>
     </div>
    );
  };
};

export default App;
