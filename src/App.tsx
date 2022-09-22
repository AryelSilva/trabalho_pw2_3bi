import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Contatos } from './pages/Contatos';


import { Home } from './pages/Home';
import { Exposicao } from './pages/Exposicao';

function App() {
  return (
    <>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contatos' element={<Contatos/>} />
        <Route path='/exposicao' element={<Exposicao/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;