import React, { useState, useContext } from 'react';
import NewNote from './NewNote/NewNote';
import Note from './Note/Note';
import classes from './NotesContainer.module.css';
import NotesContext from '../../Context/NotesContext';

export default function Notes() {
  const [showNewNoteModal, setShowNewNoteModal] = useState(false);
  const notesCtx = useContext(NotesContext);

  const closeModalHandler = () => {
    setShowNewNoteModal(false);
  };

  const showNewNoteModalHandler = () => {
    setShowNewNoteModal(true);
  };

  const addNewNoteHandler = (newNote) => {
    notesCtx.addNote(newNote);
  };

  const deleteNoteHandler = (id) => {
    notesCtx.deleteNote(id);
  };

  return (
    <>
      {showNewNoteModal && <NewNote onClose={closeModalHandler} newNoteHandler={addNewNoteHandler} />}
      <div className={classes['card-container']}>
        {notesCtx.notes.map((note) => (
          <Note content={note} key={note.id} onDelete={deleteNoteHandler} />
        ))}
        <button onClick={showNewNoteModalHandler} className={classes['btn-new']}>
          +new note
        </button>
      </div>
    </>
  );
}
