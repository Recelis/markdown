import React, { Component } from 'react'
import MyMarkDown from './MyMarkDown'

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" }
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
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange}  />
        </form>
        <MyMarkDown 
        value={this.state.value}
        />
      </div>
    )
  }
}

export default MyForm; 