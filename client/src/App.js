import React, { useState } from 'react';
import { Route, NavLink } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import matchpathinfo from './Movies/Path';
const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <NavLink to="/path">Path</NavLink>
      <SavedList list={savedList} />
      <Route path="/" exact component={MovieList}/>
      <Route path="/movies/:id" component={Movie}/>
      <Route path='/path' component={matchpathinfo}/>
    </div>
  );
};

export default App;
