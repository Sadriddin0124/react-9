import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Auth() {
    let navigate = useNavigate()
    const Login =()=> {
        let Username = document.getElementById('username').value
        let Password = document.getElementById('password').value
        if(Username === "admin" && Password === "123") {
            navigate("/cars_table")
        } else {
            alert("Fail happened")
        }
    }
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-6 offset-3 mt-5">
          <div class="card text-center">
            <div className="card-header">
              <h1>Registration</h1>
            </div>
            <div class="card-body">
              <input id="username" type="text" className="form-control my-3" placeholder="Username" />
              <input id="password" type="password" className="form-control my-3" placeholder="Password" />
            </div>
            <div className="card-footer">
                <button type="submit" className="btn btn-success" onClick={Login}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
