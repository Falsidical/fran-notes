import React from 'react';
import Card from '../../UI/Card/Card';

import classes from './Note.module.css';

export default function Note(props) {
  const { id, title, body } = props.content;

  const deleteNoteHandler = () => {
    props.onDelete(id);
  };
  return (
    <Card className={classes.note}>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={deleteNoteHandler}>delete</button>
    </Card>
  );
}
