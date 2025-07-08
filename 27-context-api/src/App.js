import React from 'react';
import { useState } from 'react';
import Person from './components/Person';
import UserContext from './context/UserContext';
import PersonChange from './components/PersonChange';
const App = () => {
  const [username, setUsername] = useState('Vladislav');
  return (
    <UserContext.Provider value={{ user: username, setUser: setUsername }}>
      <div className="App">
        <Person></Person>
        <PersonChange />
      </div>
    </UserContext.Provider>
  );
};

export default App;
