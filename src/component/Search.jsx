import React,{useState} from 'react'

function Search() {
    const[key,setKey] = useState('')

    const handler = () =>{

    }

  return (
    <div className='col-md-6 mt-5'>
        <div className="block mt-5">
            <h1 className="display-1">
                <span className="text-success">Music</span> for Everyone
            </h1>
        </div>
        <div className="card">
            <div className="card-body">
                <div className="form-group">
                    <div className="input-group">
                        <input type="search" name="key" value={key} onChange={(e)=> setKey(e.target.value)}id="key"className="form-control" placeholder="Enter artist name here"></input>
                        <button className="btn btn-success">Search</button> 
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Search
