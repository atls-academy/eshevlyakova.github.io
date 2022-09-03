import React, { Component } from "react";

function Header({ title }) {
  return <div>{title ? title : 'Default title'}</div>;
}

class HomePage extends Component {
  state = {};
  render() {
    return <Header title="Develop. Preview. Ship. 🚀" />;
  }
}

export default HomePage
