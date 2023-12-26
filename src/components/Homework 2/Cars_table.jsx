import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
export default function Cars_table() {
  const value = useContext(MyContext)
  const [Name, setName] = useState("");
  const [Color, setColor] = useState("");
  const [Price, setPrice] = useState("");
  const [Position, setPosition] = useState("");
  const [Year, setYear] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleColor = (e) => {
    setColor(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handlePosition = (e) => {
    setPosition(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const addCar = () => {
    const new_cars = {
      id: value.cars.length + 1,
      name: Name,
      color: Color,
      Price: Price,
      position: Position,
      year: Year,
    };
    value.setCars([...value.cars, { ...new_cars }]);
  };
  const removeCars =(index)=> {
    value.cars.splice(index, 1)
    value.setCars([...value.cars])
  }
  return (
      <div className="container">
        <div className="row">
          <div className="col-8 ">
            <h1 className="text-center">Cars table</h1>
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>T/R</th>
                  <th>Name</th>
                  <th>Color</th>
                  <th>Price</th>
                  <th>Position</th>
                  <th>Year</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {value.cars.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.color}</td>
                      <td>{item.Price}</td>
                      <td>{item.position}</td>
                      <td>{item.year}</td>
                      <td>
                        <Link className="mx-2" to={`/single_car/${item.id - 1}`}>
                          <FontAwesomeIcon icon={faEye} />
                        </Link>
                        <button className="btn btn-danger" onClick={()=>removeCars(index)}>Remove</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-4">
            <h1>New Car</h1>
            <input
              type="text"
              className="form-control my-3"
              placeholder="Name"
              onChange={handleName}
              />
            <input
              type="text"
              className="form-control my-3"
              placeholder="Color"
              onChange={handleColor}
              />
            <input
              type="text"
              className="form-control my-3"
              placeholder="Price"
              onChange={handlePrice}
              />
            <input
              type="text"
              className="form-control my-3"
              placeholder="Position"
              onChange={handlePosition}
              />
            <input
              type="number"
              className="form-control my-3"
              placeholder="Year"
              onChange={handleYear}
              />
            <button className="btn btn-success" onClick={addCar}>
              Add car
            </button>
          </div>
        </div>
      </div>
  );
}
