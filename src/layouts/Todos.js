import React, { Component } from 'react';

import { Input } from '../components'

class Todos extends Component {
  state = {
    newTodo: '',
    list: [],
  }

  handleAddTodo = evt => {
    evt.preventDefault();

    this.setState({
      list: [this.state.newTodo, ...this.state.list],
      newTodo: '',
    })
  }

  handleChangeInput = evt => {
    this.setState({ newTodo: evt.target.value })
  }

  render() {
    return (
      <div>
        This is Todos layout! <br />
        <form onSubmit={this.handleAddTodo}>
          <Input
            onChange={this.handleChangeInput}
            value={this.state.newTodo}
          />
        </form>

        {this.state.list.map(item => (
          <li>{item}</li>
        ))}
      </div>
    );
  }
}

export default Todos;
