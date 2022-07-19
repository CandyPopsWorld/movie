import Header from '../header/Header';
// import Main from '../main/Main';
import Footer from '../footer/Footer';

import Movie from '../../services/movie';
import { data } from '../../data';

import './App.css';
import { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from '../error/Error';
import Spinner from '../spinner/Spinner';
// import { MainPage, Page404, SingleMoviePage} from '../pages';

const MainPage = lazy(() => import('../pages/MainPage'));
const Page404 = lazy(() => import('../pages/page404/Page404'));
const SingleMoviePage = lazy(() => import('../pages/singleMoviePage/SingleMoviePage'));

function App() {

  const [collections, setCollections] = useState([]);

  const movie = new Movie();

  const settingState = (res) => {
    setCollections(collect => [...collect,res]);
  }

  useEffect(() => {
    data.forEach(dt => {
      movie.getMovieCollection(dt.id, Math.floor(Math.random() * (5 - 1) + 1))
      .then(res => {
        settingState(res);
      })
    })
  }, [])

  // console.log(collections);
  
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route 
            path='/' 
            element={
              (
                <>
                  <Header/>
                    <MainPage collections={collections}/>
                  <Footer/>
                </>
              )
            }/>

            <Route path='/film/:filmId' element={<SingleMoviePage/>}/>
            <Route path='*' element={<Page404/>}/>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
