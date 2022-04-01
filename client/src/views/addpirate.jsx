import React, {useState} from 'react'
import axios from 'axios'
import {useHistory, Link} from 'react-router-dom'


const CreatePirate = (props) => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [chests, setChests] = useState(0)
    const [phrase, setPhrase] = useState("")
    const [position, setPosition] = useState("captain")
    const [leg, setLeg] = useState(true)
    const [patch, setPatch] = useState(true)
    const [hand, setHand] = useState(true)
    const [errors, setErrors] = useState([])
    const history = useHistory()


    const handleSubmit =e=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/pirates/new',{name, image, chests, phrase, position, leg, patch, hand})
            .then(res=>{
                history.push('/pirates')
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors
                const errorArr = []
                for( const key of Object.keys(errorResponse)){
                  errorArr.push(errorResponse[key]["message"]) 
                  console.log(errorResponse[key]["message"])
                }
                setErrors(errorArr)
              })
    }

    return (
    <div>
        <div>
            <h1>Add Pirate</h1>
            <button><Link to={`/pirates`} className="h4 text-decoration-none">crew board</Link></button>
        </div>
        <form onSubmit={handleSubmit} className="d-flex flex-column p-3 w-25">
            <div className='mt-2'>
                <label className='mr-2 h5'>Pirate Name:</label>
                <input type="text" name="name" value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className='mt-2'>
                <label className='mr-2 h5'>Image URL: </label>
                <input type="string" name="image" value={image}
                    onChange={(e)=>setImage(e.target.value)}
                />
            </div>
            <div className='mt-2'>
                <label className='mr-2 h5'># of Treasure Chests: </label>
                <input type="number" name="chests" value={chests}
                    onChange={(e)=>setChests(e.target.value)}
                />
            </div>
            <div className='mt-2'>
                <label className='mr-2 h5'>Pirate Catch Phrase: </label>
                <input type="string" name="phrase" value={phrase}
                    onChange={(e)=>setPhrase(e.target.value)}
                />
            </div>
            <div className='mt-2'>
                <label className='mr-2 h5'>Crew Position: </label>
                <select name="position" id="position" onChange={(e)=>setPosition(e.target.value)}>
                    <option value="captain">Captain</option>
                    <option value="first mate">First Mate</option>
                    <option value="quarter master">Quarter Master</option>
                    <option value="boatswain">Boatswain</option>
                    <option value="powder monkey">Powder Monkey</option>
                </select>
            </div>
            <div>
                <label className='mr-2 h5'>Peg Leg</label>
                <input type="checkbox" name="leg" checked={leg}onChange={(e)=>setLeg(e.target.checked)}/>
            </div>
            <div>
                <label className='mr-2 h5'>Eye Patch</label>
                <input type="checkbox" name="patch" checked={patch} onChange={(e)=>setPatch(e.target.checked)}/>
            </div>
            <div>
                <label className='mr-2 h5'>Hook Hand</label>
                <input type="checkbox" name="hand" checked={hand} onChange={(e)=>setHand(e.target.checked)}/>
            </div>
            <button className='btn btn-primary w-25 mt-2'>Add pirate</button>
        </form>

        {
            errors &&
            errors.map((err, i)=>{
            return(
                <p key={i} className="ml-4">{err}</p>
            )})
        }
    </div>
  )
}

export default CreatePirate
