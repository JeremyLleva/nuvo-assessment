import logo from './logo.svg';
import './App.css';
import utils from './api/utils';
import { useEffect } from 'react';
import axios from 'axios';
import StorePage from './mockup/StorePage';

const App = () => {
  // useEffect(async() =>{
  //   let response = await axios.get('https://fakestoreapi.com/products?limit=5').then(function(response){console.log(response)})
  //   console.log(response.data)
  // }, [])
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
      <StorePage />
  );
}

export default App;
