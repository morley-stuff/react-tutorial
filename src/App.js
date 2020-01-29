import React from "react";
import "./App.css";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";

function App() {
  return (
    <div className="App">
      <EventBind></EventBind>
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
    </div>
  );
}

export default App;
