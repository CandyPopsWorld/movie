import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';

import Movie from '../../services/movie';
import { data } from '../../data';

import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [collections, setCollections] = useState([]);

  const movie = new Movie();

  const settingState = (res) => {
    setCollections(collect => [...collect,res]);
  }

  useEffect(() => {
    data.forEach(dt => {
      movie.getMovieCollection(dt.id)
      .then(res => {
        settingState(res);
      })
    })
  }, [])

  console.log(collections);

  return (
    <div className="App">
      <Header/>
      <Main collections={collections}/>
      <Footer/>
    </div>
  );
}

export default App;
