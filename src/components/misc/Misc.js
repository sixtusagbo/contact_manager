import React, { Component } from 'react';

class Misc extends Component {
  state = {
    title: '',
    body: '',
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body,
        })
      );
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
    const { title, body } = this.state;

    return (
      <div>
        <h1>Miscellaneous</h1>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    );
  }
}

export default Misc;
