import React from 'react';
import 'react-calendar-heatmap/dist/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyles'
import Header from './components/Header';
import Profile from './components/Profile';
import Repo from './components/Repo';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:reponame" element={<Repo />} />
      </Routes>

      {/* <Footer /> */}

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
