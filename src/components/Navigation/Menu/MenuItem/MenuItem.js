import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './MenuItem.css';

const menuItem = (props) => {
  return (
    <li className={classes.MenuItem}>
      <NavLink
        to={props.to}
        exact={props.exact}
        activeClassName={classes.active}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default menuItem;
