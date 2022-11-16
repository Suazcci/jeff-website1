import React from 'react';
import '../../App.css';
import '../../Components/Cards.css';

export default function Spotify() {

    /*
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    */

    return (
        <div className='spotify-container'>
            <div style={{position: 'relative', height: 0, overflow: 'hidden', paddingBottom: '56.25%'}}>
                <iframe 
                title="artistsPage"
                id="redirect" 
                src="https://open.spotify.com/playlist/37i9dQZF1DX5Vy6DFOcx00?si=c57a9dfb94b8447b" 
                target="_blank"
                rel="noopener noreferrer"
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