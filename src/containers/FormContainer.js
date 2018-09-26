import React, {Component} from 'react';

class FormContainer extends Component {
  render(){
    return (
      <form>
        <input type='text' placeholder="GitHub username"/>
        <button type='Submit'>Add card</button>
      </form>
    );
  };
};

export default FormContainer;
