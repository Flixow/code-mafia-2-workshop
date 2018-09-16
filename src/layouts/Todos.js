import React, { Component } from 'react';

import { Input, List } from '../components'
import { Task } from '../models'

class Todos extends Component {
  state = {
    newTask: '',
    list: [],
  }

  handleAddTask = evt => {
    evt.preventDefault();
    const task = new Task(this.state.newTask)

    this.setState({
      list: [task, ...this.state.list],
      newTask: '',
    })
  }

  handleChangeInput = evt => {
    this.setState({ newTask: evt.target.value })
  }

  render() {
    return (
      <div>
        This is Todos layout! <br />
        <form onSubmit={this.handleAddTask}>
          <Input
            onChange={this.handleChangeInput}
            value={this.state.newTask}
          />
        </form>

        <List items={this.state.list} />
      </div>
    );
  }
}

export default Todos;
