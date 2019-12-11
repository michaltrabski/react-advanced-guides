import React, { Component } from "react";

const withCounter = WrappedComponent => {
  class WithCounter extends Component {
    state = {
      count: 0
    };

    incrementCount = () => [
      this.setState(prevState => {
        return { count: prevState.count + 1 };
      })
    ];
    render() {
      return (
        <WrappedComponent
          {...this.props}
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
