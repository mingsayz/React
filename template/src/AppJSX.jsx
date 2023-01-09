//import logo from "./logo.svg";
import "./App.css";
import * as React from "react";

function AppJSX() {
  const name = "dylan";
  const list = ["1", "2", "3"];
  return (
    <>
      <h1>{`hello, ${name} sir`}</h1>
      <ul>
        {list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default AppJSX;
