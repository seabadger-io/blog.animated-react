import React from 'react';

import classes from './Backdrop.css';

const backdrop = (props) => {
  return (
    <div
      className={classes.Backdrop}
      onClick={props.onClick ? props.onClick : null}
    ></div>
  );
};

export default backdrop;
