import React from 'react';
import '../../App.css';
import '../../Components/Cards.css';

export default function SpotifyAPI() {

    return (
        <div className='spotify-container'>
            <div style={{position: 'relative', height: 0, overflow: 'hidden', paddingBottom: '56.25%'}}>
                <iframe 
                title="artistsPage"
                id="redirect" 
                src="https://developer.spotify.com/documentation/web-api/" 
                framBorder={0} 
                style={{position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%'}}>
                    Spotify Page
                </iframe>
            </div>
        </div>
    )
}