import React from 'react';

import classes from './SideDrawer.css';
import Aux from '../../UI/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';
import MenuItem from '../Menu/MenuItem/MenuItem';

const sideDrawer = (props) => {
  const myClasses = [ classes.SideDrawer ];
  myClasses.push(props.isOpen ? classes.Open : classes.Close);
  return (
    <Aux>
      <div
        className={myClasses.join(' ')}
        onClick={props.toggleHandler}
      >
        <nav>
          <ul className={classes.MenuItems}>
            {
              props.menuItems.map(({to, label, exact=false}) => {
                return <MenuItem key={to} to={to} exact={exact}>{label}</MenuItem>
              })
            }
          </ul>
        </nav>
      </div>
      { props.isOpen ? <Backdrop onClick={props.toggleHandler} /> : null }
    </Aux>
  );
};

export default sideDrawer;
