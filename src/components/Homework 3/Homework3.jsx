import React from 'react'
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'

export default function Homework3() {
  return (
    <div className='container'>
        <div className="row border-5 border-black border mt-5 p-4">
            <div className="col-6 border border-4 border-black " >
                <FirstComponent/>
            </div>
            <div className="col-6 border border-4 border-black ">
                <SecondComponent/>
            </div>
        </div>
    </div>
  )
}
