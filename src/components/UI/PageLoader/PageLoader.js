import React, { Component } from 'react';
import classes from './PageLoader.css';

export default (PageComponent) => {
  return class extends Component {
    render() {
      return (
        <div className={classes.PageLoader}>
          <PageComponent {...this.props} />
        </div>
      );
    }
  }
};
