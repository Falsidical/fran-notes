import React, { useRef } from 'react';
import Modal from '../../UI/Modal/Modal';

import classes from './NewNote.module.css';

export default function NewNote(props) {
  const titleRef = useRef('');
  const bodyRef = useRef('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const body = bodyRef.current.value;
    if (title.trim() === '' || body.trim() === '') return;
    const newNote = { title, body };
    props.newNoteHandler(newNote);
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" ref={titleRef} />
        </div>
        <div>
          <label htmlFor="body">Title:</label>
          <textarea id="body" name="body" ref={bodyRef}></textarea>
        </div>
        <div className={classes['btn-container']}>
          <button type="button" onClick={props.onClose} className={classes.btn}>
            Cancel
          </button>
          <button className={classes.btn}>Add Note</button>
        </div>
      </form>
    </Modal>
  );
}
