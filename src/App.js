import './App.css';
import LabelStudioUI from './Components/LabelStudio/LabelStudioUI';
import Header from './Components/Header/Header';
import React from 'react';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ProjectHub from './Components/ProjectHub/ProjectHub'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LabelHub from './Components/LabelHub/LabelHub';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/label" element={
          <div style={{backgroundColor:"black", minHeight:"90vh"}}>
            <LabelStudioUI />
          </div>
        } />
        <Route path="/projects" element={<ProjectHub />} />
        <Route path="/label-projects" element={<LabelHub />} />
      </Routes>
    </Router>
  );
}

export default App;
