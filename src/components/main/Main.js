import { Component} from 'react';
import CollectionList from '../collectionsList/CollectionsList';
import CollectionItem from '../collectionItem/CollectionItem';
import GenreHeader from '../genreHeader/GenreHeader';

import {data} from '../../data';
import Movie from '../../services/movie';
import './Main.scss';

const Main = ({collections}) =>{
  const components = collections.map((item,i) => {
    const elements = item.map((it,j) => {
      if(j < 9){
        return <CollectionItem name={it.name} key={it.id} idKey={it.id} poster={it.poster} rating={it.rating}/>
      }
    })

    return (
      <>
        <GenreHeader genre={data[i].genre}/>
        <CollectionList>
          {elements}
        </CollectionList>
      </>
    )
  })
  return(
      <main className='main'>
          <div className="main_collection">
            {components}
          </div>
      </main>
  )
}

export default Main;