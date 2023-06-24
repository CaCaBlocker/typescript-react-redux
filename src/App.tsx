import React from 'react';
import './App.css';

import UserList from './userList';
import UserForm from './userForm';

function App() {
  return (
    <div className="App">
      <UserList/>
      <UserForm/>
    </div>
  );
}

export default App;
