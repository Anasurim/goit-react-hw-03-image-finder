import React, { Component } from 'react';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    shownModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({
      shownModal: !state.shownModal,
    }));
  };

  render() {
    const { shownModal } = this.state;
    return <>{shownModal && <Modal></Modal>}</>;
  }
}
