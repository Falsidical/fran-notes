import React from 'react';
import classes from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={classes.navbar}>
      <h1 className={classes['navbar--title']}>Fran Notes</h1>
    </nav>
  );
}
