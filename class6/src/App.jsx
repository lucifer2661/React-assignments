import {useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [allPokemon, setallPokemon] = useState([])
  const getData = async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon")
    setallPokemon(res.data.results)
  }
 useEffect(function(){
       getData()
 }, [])
  
  return (
    <div>
      <button onClick={getData}>Get Data</button>
       {allPokemon.map(function(elem,idx){
         return <div key={idx}><h1>{elem.name}</h1></div>
       })}

    </div>
  )
}

export default App