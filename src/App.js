import React from 'react';
import './App.scss';
import { UserProfile } from "./user-profile/user-profile.component";

function App() {
  return (
    <div className="App">
      <UserProfile name='Can Cheng' email="cancheng1993@gmail.com" />
    </div>
  );
}

export default App;
