import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './priyanka/navbar';
import About from './priyanka/about';
import Content from './priyanka/content';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;