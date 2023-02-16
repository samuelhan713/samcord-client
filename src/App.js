import React, { useEffect, useState } from 'react';
import Home from './components/Home'
import Login from './components/Login'


function App() {

  const userInfo = {
    username: "samuel.han@gmail.com"
  }

  const [user, setUser] = useState({ username: "" });

  const LoggingIn = details => {
    console.log(details);
    setUser({ username: details.username });
  }

  return (
    <div className="App">
      {(user.username != "") ? (
        <Home username={user.username} />
      ) : (
        <Login LoggingIn={LoggingIn} />
      )}
    </div>
  );
}

export default App;
