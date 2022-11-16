import React from 'react';
import '../../App.css';
import '../../Components/Cards.css';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import '../Navbar.css';

export default function Spotify() {
    
    return (
        <div>
            <a href="https://open.spotify.com/user/spotify?si=b1fd0918192a4108" target="_blank" rel="noopener noreferrer">
                <BsFillPlayCircleFill />
            </a>
        </div>
    )
}