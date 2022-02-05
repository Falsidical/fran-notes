import React from 'react';

const NotesContext = React.createContext({
  notes: [],
  isLoading: false,
  addNote: (note) => {},
  removeNote: (id) => {},
});

export default NotesContext;
