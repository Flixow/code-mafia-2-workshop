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

  handleRemoveTask = id => {
    const { list } = this.state;
    const filteredList = list.filter(task => task.id !== id);

    this.setState({ list: filteredList })
  }

  handleChangeTask = (id, title) => {
    const { list } = this.state;
    const editedList = list.map(task => {
      if (task.id === id) {
        task.title = title
      }

      return task
    })

    this.setState({ list: editedList })
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

        <List
          items={this.state.list}
          handleRemoveItem={this.handleRemoveTask}
          handleChangeItem={this.handleChangeTask}
        />
      </div>
    );
  }
}

export default Todos;
