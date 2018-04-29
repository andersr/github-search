import React, { Component } from 'react';

import { Container } from 'react-materialize';
import Search from './Search';
import Header from "./Header";
import './App.css';

class App extends Component {
  render() {
    return (<div>
      <Header />
      <Container>
        <div className={"app-container"}>
          <Search />
        </div>
      </Container>
    </div>
    );
  }
}

export default App;
