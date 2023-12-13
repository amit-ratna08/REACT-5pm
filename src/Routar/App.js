import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Mobile from './Mobile';
import Error from './Error';

function App() {
  return (
    <div className="Ap">
      <BrowserRouter>
         <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<h1>THIS IS ABOUT</h1>} />
          <Route path='/contect' element={<h1>MY CONTECT NO ---  1265U7948</h1>} />
          <Route path='/product/:mobile' element={<Mobile />} />
          <Route path='*' element={<Error />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
