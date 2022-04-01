
import axios from "axios"
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

const AllPirates = (props) => {
    const [pirates, setPirates] = useState()
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates`)
            .then(res => setPirates(res.data))
            .catch(err => console.log(err))
    }, [refresh])
    
    const handleDelete=(deleteId)=>{
        axios.delete(`http://localhost:8000/api/pirates/delete/${deleteId}`)
        .then(res=>{
            setRefresh(!refresh)
        })
        .catch(err=>console.log(err))
}
  return (
    <div className='p-3'>
        <h1>Pirate Crew:</h1>
        <button className=" btn btn-primary border-0"><Link to={`/pirate/new`} className="h4 text-decoration-none text-light">Create Pirate</Link></button>
        <div>
            {
                pirates &&
                    pirates.map((pirate, i)=>(
                        <div key={i} className="d-flex justify-content-between h-25 m-2 align-items-center w-100">
                            <img src={pirate.image} alt="pirate img" className="w-25 h-25 img-thumbnail " />
                            <h2>{pirate.name}</h2>
                            <button className=" btn btn-primary border-0"><Link to={`/pirate/${pirate._id}`} className="h4 text-decoration-none text-light">View Pirate</Link></button>
                            <button onClick={()=>handleDelete(pirate._id)} className="btn btn-danger">Walk The Plank</button>
                        </div>
                    ))
            }
        </div>
    </div>
  )
} 

export default AllPirates