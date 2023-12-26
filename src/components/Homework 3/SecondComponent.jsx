import React from 'react'
import Component_C from './Component_C'
import Component_D from './Component_D'

export default function SecondComponent() {
  return (
    <div className='container'>
        <h1>Second Component</h1>
      <div className="row border border-4 border-black my-2">
        <Component_C />
      </div>
      <div className="row border border-4 border-black my-2">
        <Component_D />
      </div>
    </div>
  )
}
