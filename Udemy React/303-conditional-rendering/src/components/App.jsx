import React from "react";
import Login from '../components/Login'
var isLoggedIn= true;

function App() {
  return (
    <div className="container">
     {isLoggedIn && <Login />}
    </div>
  );
}

export default App;
