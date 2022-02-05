import React, { useState } from 'react';
import Modal from '../../UI/Modal/Modal';

import classes from './NewNote.module.css';

export default function NewNote(props) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [invalidInputs, setInvalidInputs] = useState(false);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const bodyChangeHandler = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length !== 0 && body.trim().length !== 0) {
      props.newNoteHandler({ title, body });
      props.onClose();
    } else {
      setInvalidInputs(true);
    }
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" value={title} onChange={titleChangeHandler} />
        </div>
        <div>
          <label htmlFor="body">Title:</label>
          <textarea id="body" name="body" value={body} onChange={bodyChangeHandler}></textarea>
        </div>
        <div className={classes['btn-container']}>
          {invalidInputs && <p>Check your inputs</p>}
          <button type="button" onClick={props.onClose} className={classes.btn}>
            Cancel
          </button>

          <button className={classes.btn}>Add Note</button>
        </div>
      </form>
    </Modal>
  );
}
