import React, { Component } from 'react';
import HeaderPage from "./components/layouts/HeaderPage"
import BodyPage from './components/layouts/BodyPage';
import FooterPage from './components/layouts/FooterPage';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderPage />
        <BodyPage />
        <FooterPage />
      </div>
    );
  }
}

export default App;
