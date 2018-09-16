import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import { Input } from '../'

class ListItem extends Component {
  state = {
    editMode: false,
    value: this.props.item.title,
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside.bind(this), true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside.bind(this), true);
  }

  handleClickOutside(event) {
    const {editMode} = this.state;

    if (editMode === false) return;

    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(event.target)) {
      this.setState({
        editMode: false,
        value: this.props.item.title,
      });
    }
  }

  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode })
  }

  handleChangeInput = evt => {
    this.setState({ value: evt.target.value });
  }

  handleChangeItem = evt => {
    evt.preventDefault();

    this.props.handleChangeItem(this.props.item.id, this.state.value);
    this.toggleEditMode();
  }

  render() {
    const { item, handleRemoveItem } = this.props
    const { value, editMode } = this.state

    return (
      <li>
        {editMode ? (
          <form onSubmit={this.handleChangeItem}>
            <Input
              onChange={this.handleChangeInput}
              value={value}
            />
          </form>
        ) : (
          <span onClick={this.toggleEditMode}>
            {item.title}
          </span>
        )}

      <button onClick={() => handleRemoveItem(item.id)}>
          Remove
      </button>
      </li>
    );
  }
}
 
export default ListItem;
