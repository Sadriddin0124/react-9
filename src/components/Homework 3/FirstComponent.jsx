import React from "react";
import Component_A from "./Component_A";
import Component_B from "./Component_B";

export default function FirstComponent() {
  return (
    <div className="container">
        <h1>First Component</h1>
      <div className="row border border-4 border-black my-2">
        <Component_A />
      </div>
      <div className="row border border-4 border-black my-2">
        <Component_B />
      </div>
    </div>
  );
}
