import "./index.css";
import Employee from "./components/employee";
import React, { useState } from "react";

function App() {
  let [role, setRole] = useState("default");

  return (
    <div className="App bg-red-300">
      <input
        type="text"
        onChange={(e) => {
          setRole(e.target.value);
        }}
      ></input>
      <Employee role={role} setRole={setRole} />
    </div>
  );
}

export default App;
