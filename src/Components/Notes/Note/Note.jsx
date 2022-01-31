import React from 'react';
import Card from '../../UI/Card/Card';

import classes from './Note.module.css';

export default function Note(props) {
  const { title, body } = props.note;
  return (
    <Card className={classes.note}>
      <h2>{title}</h2>
      <p>{body}</p>
    </Card>
  );
}
