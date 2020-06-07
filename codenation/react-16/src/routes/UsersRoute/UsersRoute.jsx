import React, { useState, useEffect } from 'react';
import UsersList from '../../containers/UsersList/UsersList';

const UsersRoute = () => {
  const [ users, setUsers ] = useState([]);

  async function getUsers() {
    await fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users', { method: 'GET'})
    .then((response) => response.json())
    .then((users) => {
      setUsers(users);
    });
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container" data-testid="users-route">
      { users && <UsersList users={users}/> }
    </div>
  );
};

export default UsersRoute;