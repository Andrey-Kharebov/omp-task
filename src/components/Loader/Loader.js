import React from 'react';
import classes from './Loader.module.css';

function Loader() {
  return (
    <div className={ classes.loaderSection }>
      <div className={ classes.ldsRoller }><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader;
