import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import LastProductInDB from './LastProductInDB';
import ContentRowProducts from './ContentRowProducts';
import NotFound from './NotFound';
import SideBar from './SideBar';

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <Routes>
          <Route path="/" element={<ContentWrapper />}/>
          <Route path="CategoriesInDb/*" element={<CategoriesInDb />}/>
          <Route path="LastProductInDB/*" element={<LastProductInDB />}/>
          <Route path="ContentRowProducts/*" element={<ContentRowProducts />}/>
          <Route path="*" element={<NotFound/>} />  
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
