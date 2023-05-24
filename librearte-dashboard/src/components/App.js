import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowProducts from './ContentRowProducts';
import NotFound from './NotFound';
import SearchMovies from './SearchMovies';

import SideBar from './SideBar';

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <Routes>
          <Route path="/" element={<ContentWrapper />}/>
          <Route path="CategoriesInDb/*" element={<CategoriesInDb />}/>
          <Route path="LastMovieInDb/*" element={<LastMovieInDb />}/>
          <Route path="ContentRowProducts/*" element={<ContentRowProducts />}/>
          <Route path="search/*" element={<SearchMovies />}/>
          <Route component={NotFound} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
