import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


const OnePirate = () => {

    const{id} = useParams()
    const[pirate, setPirate] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(res=>setPirate(res.data))
            .catch(err=>console.log(err))
    })

  return (
    <div>
        {pirate?
            <div className='d-flex flex-column align-items-center w-100'>
                <h1>{pirate.name}</h1>
                <div className='d-flex justify-content-around w-100'>
                    <div className='d-flex flex-column'>
                        <img src={pirate.image} alt="pirate img" className="w-50 img-thumbnail " />
                        <h2>"{pirate.phrase}"</h2>
                    </div>
                    <div className='d-flex flex-column'>
                        <h2>About</h2>
                        <p>position: {pirate.position}</p>
                        <p>treasures: {pirate.chests}</p>
                        <p>Peg Leg: {pirate.leg?"Yes":"No"}</p>
                        <p>Eye Patch: {pirate.patch?"Yes":"No"}</p>
                        <p>Hook Hand: {pirate.hand?"Yes":"No"}</p>
                    </div>
                </div>
                <Link to={'/pirates'}>Home</Link>
            </div>:
            console.log('pirate')
        }
    </div>
  )
}

export default OnePirate