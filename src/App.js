import React, { Component } from 'react';
import './App.css';
import Converter from './components/Converter'
import github from "./img/github.png";


class App extends Component {
  openWindow(){
    window.open("https://github.com/Recelis/markdown",'_blank');
  }

  render() {
    return (
      <div>
        <p className="copyright"><span className = "title">Markdown Previewer</span> Created by Jacky Lui 2017
        <span><button onClick = {()=>this.openWindow()}className = "github"><img className = "github" src = {github}></img></button></span>
        </p>
        <Converter
        />
        
        
      </div>
    );
  }
}




export default App;
