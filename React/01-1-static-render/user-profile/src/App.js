import React, { Component } from 'react';
import UserCard from './UserCard';
import './App.css';

const userInfo = require('./user.json');

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <UserCard 
              avatar={userInfo.avatar_url}
              name={userInfo.name}
              login={userInfo.login}
              company={userInfo.company}
              location={userInfo.location}
              repositories={userInfo.public_repos}
              following={userInfo.following}
              followers={userInfo.followers}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
