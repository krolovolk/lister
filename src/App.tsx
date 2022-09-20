import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IPaths } from './api/types';
import Header from './components/Base-Layout/Header/Header';
import { Main, MainContainer } from './components/Base-Layout/styled';
import AboutPage from './pages/AboutPage';
import CatalogPage from './pages/CatalogPage';
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';


function App() {

  return (
    <MainContainer>
      <Header />
      <Main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={`${IPaths.Home}`} element={<HomePage />} />
          <Route path={`${IPaths.Catalog}`} element={<CatalogPage />} />
          <Route path={`${IPaths.About}`} element={<AboutPage />} />
          <Route path={`${IPaths.Any}`} element={<NoPage />} />
        </Routes>
      </Main>
    </MainContainer>
  );
}

export default App;
