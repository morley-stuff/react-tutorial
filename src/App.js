import React from "react";
import "./App.css";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";

function App() {
  return (
    <div className="App">
      <NameList />
    </div>
  );
}

export default App;
