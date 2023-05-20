import React, { Component } from 'react';

class Misc extends Component {
  state = {};

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
  }

  render() {
    return (
      <div>
        <h2>Miscellaneous</h2>
      </div>
    );
  }
}

export default Misc;
