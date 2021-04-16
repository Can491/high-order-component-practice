import React from 'react';
import './App.scss';
import UserProfile from "./user-profile/user-profile.component";
import UserList from "./user-list/user-list.component";

function App() {
  return (
    <div className="App">
      <UserList dataSource='https://jsonplaceholder.typicode.com/users'/>
      <UserProfile name='Can Cheng' email="cancheng1993@gmail.com" dataSource='https://jsonplaceholder.typicode.com/posts'/>
    </div>
  );
}

export default App;
