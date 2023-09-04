import './App.css';

//=====Component imports=======//
//import the pokemon page component


//=====Image imports=======//
import PokemonLogo from './PokemonLogo.png'

function App() {
  return (
    <div className="App">
      <header className='header'>
        <img src={PokemonLogo} alt="logo" />
      </header>
    
    </div>
  );
}

export default App;
