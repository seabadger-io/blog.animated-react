import React from 'react';

import classes from './Menu.css';
import MenuItem from './MenuItem/MenuItem';
import SideDrawer from '../SideDrawer/SideDrawer';

const menu = (props) => {
  return (
    <header className={classes.Menu}>
      <button
        className={classes.SideDrawerToggle}
        onClick={props.drawerToggleHandler}
        aria-label={props.sideDrawerIsOpen ? "Close sidebar" : "Open sidebar" }
      >☰</button>
      <nav>
        <ul className={classes.MenuItems}>
          {
            props.menuItems.map(({to, label, exact=false}) => {
              return <MenuItem key={to} to={to} exact={exact}>{label}</MenuItem>
            })
          }
        </ul>
      </nav>
      <SideDrawer
            isOpen={props.sideDrawerIsOpen}
            menuItems={props.menuItems}
            toggleHandler={props.drawerToggleHandler}
          />
      {/* props.sideDrawerIsOpen ? (
          <SideDrawer
            isOpen={props.sideDrawerIsOpen}
            menuItems={props.menuItems}
            toggleHandler={props.drawerToggleHandler}
          />
        ) : null */}
    </header>
  );
};

export default menu;
