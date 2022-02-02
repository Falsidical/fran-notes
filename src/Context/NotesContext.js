import React from 'react';

const NotesContext = React.createContext({
  notes: [],
  addNote: (note) => {},
  removeNote: (id) => {},
});

export default NotesContext;
