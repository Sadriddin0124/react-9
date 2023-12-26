import React from "react";
import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-6 offset-3 mt-5">
            <Link to="/homework1" className="btn btn-dark m-3">
              Homework 1
            </Link>
            <Link to="/homework2" className="btn btn-dark m-3">
              Homework 2
            </Link>
            <Link to="/homework3" className="btn btn-dark m-3">
              Homework 3
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
