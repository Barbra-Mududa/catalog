import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Home from './pages/Home';

function App() {
  return (
    <div className='w-screen h-screen flex flex-row flex-grow'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
  </div>
  );
}

export default App;
