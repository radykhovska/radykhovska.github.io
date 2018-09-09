import React, { Component } from 'react';
import Content from './Content'
import UsersList from './UsersList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Content>
          <UsersList/>
        </Content>
      </div>
    );
  }
}

export default App;
