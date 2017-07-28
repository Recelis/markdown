import React, { Component } from 'react';
import './App.css';
import Converter from './components/Converter'



class App extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Markdown Previewer</h1>
        <Converter
        />
        <p className="copyright">Created by Jacky Lui 2017</p>
      </div>
    );
  }
}




export default App;
