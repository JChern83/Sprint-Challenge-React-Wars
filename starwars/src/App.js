import React, {useState, useEffect} from 'react';
import './App.css';
import StarWarsCard from "./components/StarWarsCard";
// https://swapi.co/api/people/1/

const App = () => {


  const [starWarsData, setStarWarsData] = useState([])

  useEffect(()=>{
    fetch('https://swapi.co/api/people/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      setStarWarsData(data.results)
    });
  }, [])
    console.log(starWarsData)
  const displayData = () => {
    return starWarsData.map(data => {
      return (
        <StarWarsCard data = {data} />
      )
    })
  }
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {displayData()}
    </div>
  );
}

export default App;