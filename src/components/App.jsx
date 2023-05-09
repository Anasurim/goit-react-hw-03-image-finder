import React, { Component } from 'react';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

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
    const { shownModal, searchQuerry } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchQuerry={searchQuerry} />
        {shownModal && <Modal></Modal>}
      </>
    );
  }
}
