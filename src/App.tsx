// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Formation from "./pages/Formation";
import Experience from "./pages/Experience";
import ProjetPersonnel from "./pages/ProjetPersonnel";
import Competences from "./pages/Competences";
import Contact from "./pages/Contact";



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formation" element={<Formation />} />
           <Route path="/experience" element={<Experience />} />
        <Route path="/projetPersonnel" element={<ProjetPersonnel />} />
         <Route path="/competences" element={<Competences />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
