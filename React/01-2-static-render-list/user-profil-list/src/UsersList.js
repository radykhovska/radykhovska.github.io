import React from 'react';
import User from './User';

import users from './users.json';

const UsersList = () => (
  <ul className="list-group">
    { users.map(
      user => (
        <User 
          key={user.node_id}
          itemClass="list-group-item"
          avatar={user.avatar_url}
          login={user.login}
          link={user.html_url}
          admin={user.site_admin}
        />
    )) }
  </ul>
);

export default UsersList;