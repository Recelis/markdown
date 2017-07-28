import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import marked from 'marked';

class App extends Component {
  MyComponent(rawHTML) {
      return <div dangerouslySetInnerHTML={createMarkup(rawHTML)} />;
  }
  render() {
    return (
      <div>
        {this.MyComponent(marked('I am using __markdown__.'))}
      </div>
    );
  }
}



function createMarkup(rawHTML) {
  return { __html: rawHTML };
}

export default App;
