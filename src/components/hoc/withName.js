import React, { Component } from "react";

const WithName = OriginalComponent => {
  class NewComponent extends Component {
    render() {
      return <OriginalComponent name="John" />;
    }
  }

  return NewComponent;
};

export default WithName;
