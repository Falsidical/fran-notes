import React, { useReducer } from 'react';
import NotesContext from './NotesContext';
import { v4 as uuidv4 } from 'uuid';

const defaultNotes = {
  notes: [],
};

const notesReducer = (state, action) => {
  if (action.type === 'ADD') {
    const newNote = {
      id: uuidv4(),
      title: action.note.title,
      body: action.note.body,
    };
    const updatedNotes = [...state.notes, newNote];

    return {
      notes: updatedNotes,
    };
  }

  if (action.type === 'DELETE') {
    const updatedNotes = state.notes.filter((note) => {
      return note.id !== action.id;
    });

    return {
      notes: updatedNotes,
    };
  }
};

const NotesProvider = (props) => {
  const [notesState, dispatchNoteAction] = useReducer(notesReducer, defaultNotes);

  const addNoteHandler = (note) => {
    dispatchNoteAction({ type: 'ADD', note });
  };

  const deleteNoteHandler = (id) => {
    dispatchNoteAction({ type: 'DELETE', id });
  };

  const notesContext = {
    notes: notesState.notes,
    addNote: addNoteHandler,
    deleteNote: deleteNoteHandler,
  };

  return <NotesContext.Provider value={notesContext}>{props.children}</NotesContext.Provider>;
};

export default NotesProvider;
