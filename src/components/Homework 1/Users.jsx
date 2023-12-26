import React, { useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([
    {id: 1, firstName: "Ali", lastName: "Valiyev", age: 34, address: "Samarkand"}
  ])
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [age, setAge] = useState('')
  const [address, setAddress] = useState('')
  const [search, setSearch] = useState('')
  const handleFirstname = (e) => {
    setFirstname(e.target.value)
  }
  const handleLastname = (e) => {
    setLastname(e.target.value)
  }
  const handleAge = (e) => {
    setAge(e.target.value)
  }
  const handleAddress = (e) => {
    setAddress(e.target.value)
  }
  const add_user = () => {
    let obj = {
      firstName,
      lastName,
      age,
      address
    }
    setUsers([...users, {...obj}])
  }
  const searching =(e)=> {
    setSearch(e.target.value)
  }
  const remove =(index)=> {
    users.splice(index, 1)
    setUsers([...users])
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              className="form-control my-2"
              placeholder="Search" onChange={searching}
            />
          </div>
        </div>
        <div className="col-8">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th>T/R</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.filter((item)=> {
                  if(search === "") {
                    return item
                  } else if (item.firstName.includes(search)) {
                    return item
                  }
                }).map((item,index)=> {
                  return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.age}</td>
                    <td>{item.address}</td>
                    <td>
                      <button className="btn btn-danger" onClick={()=>remove(index)}>remove</button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
        <div className="col-4">
          <button className="btn btn-success" onClick={add_user}>Add User</button>
          <form>
            <input type="text" className="form-control my-2" placeholder="Firstname" onChange={handleFirstname}/>
            <input type="text" className="form-control my-2" placeholder="Lastname" onChange={handleLastname}/>
            <input type="text" className="form-control my-2" placeholder="Age" onChange={handleAge}/>
            <input type="text" className="form-control my-2" placeholder="Address" onChange={handleAddress}/>
          </form>
        </div>
      </div>
    </div>
  );
}
