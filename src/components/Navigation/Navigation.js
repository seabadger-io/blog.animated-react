import React, { Component } from 'react';

import Menu from './Menu/Menu';

class Navigation extends Component {
  state = {
    menuItems: [
      { label: 'Main', to: '/', exact: true },
      { label: 'Rectangle', to: '/rectangle' },
      { label: 'Circle', to: '/circle' }
    ],
    sideDrawerIsOpen: false
  }

  drawerToggleHandler = () => {
    this.setState((prevState) => { 
      return {
        sideDrawerIsOpen: !prevState.sideDrawerIsOpen
      }
    });
  }

  render() {
    return (
      <Menu
        menuItems={this.state.menuItems}
        drawerToggleHandler={this.drawerToggleHandler}
        sideDrawerIsOpen={this.state.sideDrawerIsOpen}
      />
    );
  }
};

export default Navigation;
