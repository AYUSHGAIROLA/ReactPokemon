import React from 'react';
import logo from './logo.svg';
import './App.scss';
import axios from 'axios';
import PokemonEditComponent from './components/PokemonEditComponent';
import PokemonHeaderComponent from './components/PokemonHeaderComponent';
import PokemonDashboardComponent from './components/PokemonDashboardComponent';

function App() {

  return (
    <div className="App">
      <div className='pokemon-header-component'>
        <PokemonHeaderComponent></PokemonHeaderComponent>
      </div>
      <div className='pokemon-footer-component'>
        <PokemonDashboardComponent></PokemonDashboardComponent>
      </div>

    </div>
  );
}

export default App;
