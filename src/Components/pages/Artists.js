import React from 'react';
import '../../App.css';
import '../../Components/Cards.css';

export default function Artists() {
    return (
        <div className='artists-container'>
            <div style={{position: 'relative', height: 0, overflow: 'hidden', paddingBottom: '56.25%'}}>
                <iframe 
                title="artistsPage"
                id="embededSong" 
                src="https://open.spotify.com/artist/3MZsBdqDrRTJihTHQrO6Dq?si=mH-dRHkrSJemg5KyyVCKhg" 
                scrolling='no' 
                seamless='seamless' 
                framBorder={0} 
                style={{position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%'}}>
                    Artists Page
                </iframe>
            </div>
        </div>
    )
}