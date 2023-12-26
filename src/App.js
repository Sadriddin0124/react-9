import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Menu from './components/menu'
import Homework1 from './components/Homework 1/homework1'
import Homework2 from './components/Homework 2/Homework2'
import Cars_table from './components/Homework 2/Cars_table'
import Singlecar from './components/Homework 2/Singlecar'
import { createContext } from 'react'
import { useState } from 'react'
import Homework3 from './components/Homework 3/Homework3'
export  const MyContext = createContext()
export default function App() {
  const [cars, setCars] = useState([
    {
      id: 1,
      name: "Onix",
      color: "Black",
      Price: "18000$",
      position: "Full",
      year: "2023",
    },
    {
      id: 2,
      name: "Gentra",
      color: "Silver",
      Price: "16000$",
      position: "4",
      year: "2021",
    },
    {
      id: 3,
      name: "Cobalt",
      color: "Darkblue",
      Price: "14000$",
      position: "2",
      year: "2022",
    },
    {
      id: 4,
      name: "Nexia",
      color: "White",
      Price: "11000$",
      position: "5",
      year: "2023",
    },
    {
      id: 5,
      name: "Spark",
      color: "Gray",
      Price: "10000$",
      position: "3",
      year: "2022",
    },
  ]);
  const [count, setCount] = useState(0)
  return (
    <MyContext.Provider value={{count: count, cars: cars, setCars}} >
    <div>
      <Routes>
        <Route path='/' element={<Menu/>}></Route>
        <Route path='homework1' element={<Homework1/>}></Route>
        <Route path='homework2' element={<Homework2/>}></Route>
        <Route path='cars_table' element={<Cars_table/>}></Route>
        <Route path='single_car/:id' element={<Singlecar/>}></Route>
        <Route path='homework3' element={<Homework3/>}></Route>
      </Routes>
    </div>
    </MyContext.Provider>
  )
}
