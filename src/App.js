import React, { Component } from 'react';
import './App.css';
import Converter from './components/Converter'
import github from "./img/github.png";


class App extends Component {
  openWindow(){
    window.open("https://github.com/Recelis/CamperLeaderBoard",'_blank');
  }

  render() {
    return (
      <div>
        <h1 className="title">Markdown Previewer</h1>
        <Converter
        />
        <p className="copyright">Created by Jacky Lui 2017
        <span><button onClick = {()=>this.openWindow()}className = "github"><img className = "github" src = {github}></img></button></span>
        </p>
      </div>
    );
  }
}




export default App;
