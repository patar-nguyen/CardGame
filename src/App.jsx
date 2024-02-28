import { useState, useEffect } from 'react'
import './CSS/Card.css'
//import './App.css'
import networkCall from './Network/NetworkCall'

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    networkCall().then(data => {
      setPokemonData(data);
    })
  }, []);

  return (
    <div className="container">
      {pokemonData.map((pokemon, index) => (
        <div key={index} className="pokemon-box">
          {pokemon}
        </div>
      ))}
    </div>
  )
}

export default App
