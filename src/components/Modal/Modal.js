import { createPortal } from 'react-dom';
import React, { Component } from 'react';
import css from '../Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  render() {
    return createPortal(
      <div className={css.modalBackdrop}>
        <div className={css.modalContent}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
