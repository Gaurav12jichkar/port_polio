import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
        <div id='notfound'>
            <div className='notfound'>
                <div className='notfound-404'></div>
                <h1>404</h1>
            </div>
            <h2>we are sorry ,page is not found</h2>
            <p className='mb-5'>
                the page your are looking for is not availabel or not founde in our server so plese rechaake
            </p>
            <NavLink to="/">back to homepage</NavLink>
        </div>
    </>
  )
}

export default Error
