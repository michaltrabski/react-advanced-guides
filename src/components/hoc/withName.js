import React, { Component } from "react";

const withName = WrappedComponent => {
  class WithName extends Component {
    render() {
      return <WrappedComponent {...this.props} name="John" />;
    }
  }

  return WithName;
};

export default withName;
