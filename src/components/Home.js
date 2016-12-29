import React, { Component } from 'react';


class Home extends Component {
  render() {
    return (
      <div>
        {this.props.tacos.map((x, i) => <p key={i}>{JSON.stringify(x)}</p>)}
      </div>
    );
  }
}

export default Home;
