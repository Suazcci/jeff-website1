import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';
import './Components/HeroSection.js';

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={Home} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
