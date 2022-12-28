import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../components/pages/Home/Home';
import Subjects from '../components/pages/Subjects/Subjects';
import About from '../components/pages/About/About';
import NotFound from '../components/pages/NotFound/NotFound';
import NavbarComponent from '../components/layout/NavbarComponent/NavbarComponent';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/subjects' element={<Subjects />} />
        <Route path='/about' element={<About />} />
        <Route path='/notFound' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
