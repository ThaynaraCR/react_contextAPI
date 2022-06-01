
import React from "react";
import { useAuth } from "./providers/auth";

function App() {

  const {user, setUser} = useAuth()

  console.log("user", user)

  return (
    <>
    <div className="App" >
     <h1>Oi</h1>
     <input  onChange={
       (e)=> setUser({name: e.target.value})
     }/>
    </div>
    </>
  );
}

export default App;
