import React, { Component } from 'react';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchQuerry: '',
    shownModal: false,
  };

  handleFormSubmit = querry => {
    this.setState({ searchQuerry: querry });
  };

  toggleModal = () => {
    this.setState(state => ({
      shownModal: !state.shownModal,
    }));
  };

  render() {
    const { shownModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {shownModal && <Modal></Modal>}
      </>
    );
  }
}
