// rafce

import React from 'react'
import Add from './Add'
import Edit from './Edit'

const View = () => {
  return (
    <>
      <div className="d-flex justify-content-between mt-3">
        <h2 className="text-warning">All Projects</h2>
        <div> <Add /> </div>
      </div>
      <div className="mt-2">
        {/* project */}
        <div className="border rounded p-2 d-flex justify-content-between mb-3">
          <h3>Title</h3>
          <div className="d-flex align-items-center">
            <div> <Edit /> </div>
            <button className='btn'> <a href="https://github.com/Alanyuye10/recipie-app" target='_blank'> <i className="fa-brands fa-github"></i> </a> </button>
            <button className="btn"> <i className="fa-solid fa-trash text-danger"></i> </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default View