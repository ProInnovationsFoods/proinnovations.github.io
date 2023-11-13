import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Project from '../pages/project';
import Home from '../pages/home';

const Main = (props) => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />}></Route>
            <Route exact path='/project' element={<Project/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default Main;
