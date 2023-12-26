import React, { useState } from 'react'
import { useContext } from 'react'
import { MyContext } from '../../App'
export default function Component_C() {
    const value = useContext(MyContext)
    const [componentC, setComponentC] = useState(value.count)
  return (
    <div className='container'>
      <div className="row">
      <h1>Component A</h1>
      <div className="col-10 offset-2">
        <h1>Count: {componentC}</h1>
      </div>
      <div className="row">
        <div className="col-8 offset-4">
            <button className="btn btn-info m-2" onClick={()=>setComponentC(prev => prev + 1)}>+</button>
            <button className="btn btn-danger" onClick={()=>setComponentC(prev => prev - 1)}>-</button>
        </div>
      </div>
      </div>
    </div>
  )
}
