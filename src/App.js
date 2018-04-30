import React, { Component } from 'react';

import { Container } from 'react-materialize';
import Search from './Search';
import Header from "./Header";

class App extends Component {
  render() {
    return (<div>
      <Header />
      <Container>
        <div style={{
          maxWidth: 800,
          margin: "auto",
        }}>
          <Search />
        </div>
      </Container>
    </div>
    );
  }
}

export default App;
