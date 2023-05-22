import './app.css';
import Showcase from './Showcase.js';
import Spriggy from './images/Spriggy.png';

function App() {
  let favePokemon = "Sprigatito"
  let pokeCharacteristics = {
    type: "Grass",
    move: "Leafage"
  }

  
  return (
    <div className="background">
      <h1>
        {favePokemon}'s
        <Showcase />
       </h1>   
        <h2>{favePokemon}'s </h2>   
        <img src={Spriggy} alt={favePokemon}/> 
        <ul>
          <li><span style={{backgroundColor: "green", color: "white"}}>Type:</span> {pokeCharacteristics.type}</li>
          <li><span style={{backgroundColor: "white", color: "green"}}>Move:</span> {pokeCharacteristics.move}</li>
        </ul>
             
    
    </div>
  );
}

export default App;