import React from 'react';
import Modal from '../../UI/Modal/Modal';

export default function NewNote(props) {
  return (
    <Modal onClose={props.onClose}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" />
      <label htmlFor="body">Note:</label>
      <textarea></textarea>
    </Modal>
  );
}
