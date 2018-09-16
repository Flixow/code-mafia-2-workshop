import React, { Component } from 'react';

import { Input } from '../'

class Search extends Component {
  state = {
    term: ''
  }

  handleChangeInput = evt => {
    this.setState({ term: evt.target.value })
  }

  handleFormSubmit = evt => {
    evt.preventDefault()

    this.props.handleSubmit(this.state.term)
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <Input
          value={this.state.term}
          onChange={this.handleChangeInput}
          placeholder='Search...'
        />
      </form>
    )
  }
}

export default Search;
