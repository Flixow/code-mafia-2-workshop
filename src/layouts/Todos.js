import React, { Component } from 'react';

import { Input, List, Search } from '../components'
import { Task } from '../models'

const FILTERS = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_SEARCHED: 'SHOW_SEARCHED'
}

const TODO_FILTERS = {
  [FILTERS.SHOW_ALL]: () => true,
  [FILTERS.SHOW_SEARCHED]: (todo, text) => new RegExp(text, 'ig').test(todo.title)
}
class Todos extends Component {
  state = {
    newTask: '',
    list: [],
    filter: FILTERS.SHOW_ALL,
    searchTerm: '',
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

  handleSearchTask = term => {
    this.setState({
      filter: term ? FILTERS.SHOW_SEARCHED : FILTERS.SHOW_ALL,
      searchTerm: term,
    })
  }

  render() {
    const { list, newTask, filter, searchTerm } = this.state;
    const filteredList = list.filter(todo => TODO_FILTERS[filter](todo, searchTerm))

    return (
      <div>
        This is Todos layout! <br />
        <Search
          handleSubmit={this.handleSearchTask}
        />
        <form onSubmit={this.handleAddTask}>
          <Input
            onChange={this.handleChangeInput}
            value={newTask}
            placeholder='Add new task...'
          />
        </form>

        <List
          items={filteredList}
          handleRemoveItem={this.handleRemoveTask}
          handleChangeItem={this.handleChangeTask}
        />
      </div>
    );
  }
}

export default Todos;
