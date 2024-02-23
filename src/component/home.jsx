import React from 'react'
import Search from './Search'
import pics from '../images/pics'

function Home() {
  return (
    <div className='container'>
      <div className="row">
        <Search/>
        <div className="col-md-6">
          <img src={pics.listen} alt="" className='img-fluid'/>
        </div>
      </div>
      
    </div>
  )
}

export default Home
