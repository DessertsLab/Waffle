import React from 'react';

class Wrapper extends React.Component {
  render() {
    return <div key={this.props.id}> {this.props.compnt}</div>;
  }
}

export default Wrapper;
