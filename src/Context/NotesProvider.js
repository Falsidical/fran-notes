import React, { useReducer, useEffect, useState } from 'react';
import NotesContext from './NotesContext';

const defaultNotes = {
  notes: [],
};

const fetchNotesDB = async () => {
  const res = await fetch('https://test-backend-9e37c-default-rtdb.firebaseio.com/notes.json');
  const data = await res.json();
  const notesArray = [];
  for (const key in data) {
    notesArray.push({
      id: key,
      title: data[key].title,
      body: data[key].body,
      date: data[key].date,
    });
  }
  return notesArray;
};

const uploadNoteDB = async (note) => {
  await fetch('https://test-backend-9e37c-default-rtdb.firebaseio.com/notes.json', {
    method: 'POST',
    body: JSON.stringify(note),
  });
};

const deleteNoteDB = async (id) => {
  await fetch(`https://test-backend-9e37c-default-rtdb.firebaseio.com/notes/${id}.json`, { method: 'DELETE' });
};

const notesReducer = (state, action) => {
  if (action.type === 'SET') {
    const notesData = action.data;
    return { notes: notesData };
  }

  if (action.type === 'ADD') {
    const newNote = {
      title: action.note.title,
      body: action.note.body,
      date: Date.now(),
    };
    const updatedNotes = [...state.notes, newNote];
    uploadNoteDB(newNote);

    return {
      notes: updatedNotes,
    };
  }

  if (action.type === 'DELETE') {
    const updatedNotes = state.notes.filter((note) => {
      return note.id !== action.id;
    });

    deleteNoteDB(action.id);

    return {
      notes: updatedNotes,
    };
  }
};

const NotesProvider = (props) => {
  const [notesState, dispatchNoteAction] = useReducer(notesReducer, defaultNotes);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchNotesDB().then((res) => {
      setData(res);
      setIsLoading(false);
    });
  }, []);

  const setData = (data) => {
    dispatchNoteAction({ type: 'SET', data });
  };

  const addNoteHandler = (note) => {
    dispatchNoteAction({ type: 'ADD', note });
  };

  const deleteNoteHandler = (id) => {
    dispatchNoteAction({ type: 'DELETE', id });
  };

  const notesContext = {
    isLoading,
    notes: notesState.notes,
    addNote: addNoteHandler,
    deleteNote: deleteNoteHandler,
  };

  return <NotesContext.Provider value={notesContext}>{props.children}</NotesContext.Provider>;
};

export default NotesProvider;
