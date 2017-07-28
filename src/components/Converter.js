import React, { Component } from 'react'
import MyMarkDown from './MyMarkDown'

class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "Please Enter Some Text\n=======" }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(event.target.value);
  }
  handleSubmit(event){
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="row">
        <div className="col-xs-6"><textArea onSubmit={this.handleSubmit} value={this.state.value} onChange={this.handleChange}  className="inputText"/></div>
        <div className="col-xs-6"><MyMarkDown 
        value={this.state.value}
        /></div>
        </div>
      </div>
    )
  }
}

export default Converter; 