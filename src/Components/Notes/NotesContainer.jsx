import React, { useState } from 'react';
import NewNote from './NewNote/NewNote';
import Note from './Note/Note';
import classes from './NotesContainer.module.css';

export default function Notes() {
  const [showNewNoteModal, setShowNewNoteModal] = useState(false);

  const test1 = {
    title: 'Note 1',
    body: 'do something',
  };

  const test2 = {
    title: 'Note 2',
    body: 'do something else',
  };

  const closeModalHandler = () => {
    setShowNewNoteModal(false);
  };

  const handleNewNote = () => {
    setShowNewNoteModal(true);
  };

  return (
    <>
      {showNewNoteModal && <NewNote onClose={closeModalHandler} />}
      <div className={classes['card-container']}>
        <Note note={test1} />
        <Note note={test2} />
        <Note note={test1} />
        <Note note={test1} />
        <button onClick={handleNewNote}>+new note</button>
      </div>
    </>
  );
}
