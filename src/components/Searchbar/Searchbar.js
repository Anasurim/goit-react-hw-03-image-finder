import React, { Component } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class Searchbar extends Component {
  state = {
    querry: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.querry.trim() === '') {
      return Notify.failure('Type something');
    }
    this.props.onSubmit(this.state.querry);

    this.setState({ querry: '' });
  };

  handleChange = e => {
    this.setState({ querry: e.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <BiSearch />
          </button>

          <input
            className="input"
            type="text"
            onChange={this.handleChange}
            value={this.state.querry}
            autoComplete="off"
            autoFocus
            placeholder="Search"
          />
        </form>
      </>
    );
  }
}
