import React, {Fragment} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../components/pages/Home';
import Subjects from '../components/pages/Subjects';
import About from '../components/pages/About';
import NotFound from '../components/pages/NotFound';
import NavbarComponent from '../components/layout/NavbarComponent/NavbarComponentContainer';

const AppRouter = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/subjects' element={<Subjects />} />
          <Route path='/about' element={<About />} />
          <Route path='/notFound' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default AppRouter;
