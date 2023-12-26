import React, { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../../App";
export default function Singlecar({cars}) {
  const value = useContext(MyContext)
  const [url, setUrl] = useState(window.location.href.split("/"));
  let index = url[4];
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-6 offset-3 mt-5">
            <div className="card">
              <div className="card-header">
                <h1 className="text-center">{value.cars[index].name}</h1>
              </div>
              <div className="card-body">
                <h3>Color: {value.cars[index].color}</h3>
                <h3>Price: {value.cars[index].Price}</h3>
                <h3>Position: {value.cars[index].position}</h3>
                <h3>Year: {value.cars[index].year}</h3>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
