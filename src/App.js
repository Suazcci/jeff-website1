import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';
import './Components/HeroSection.js';
import Songs from './Components/pages/Songs';
import Artists from './Components/pages/Artists';
import Genre from './Components/pages/Genre';
import CreateAccount from './Components/pages/CreateAccount';
import Spotify from './Components/pages/Spotify';
import SpotifyAPI from './Components/pages/SpotifyAPI';
import Navigate from './Components/Navigate';


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

/* 
                    <Route path='/artists'  element={<Artists />} />
                    <Route path='/spotify'  element={<Spotify />} />
                    <Route path='/songs'  element={<Songs />} />
                    <Route path='/genre'  element={<Genre />} />
                    <Route path='/create-account'  element={<CreateAccount />} />
                    <Route path='/spotify-api'  element={<SpotifyAPI />} />
*/
