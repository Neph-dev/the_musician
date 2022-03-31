import React from 'react';

import './home.css';


function Home() {
    return (
        <div className='home-container'>

            <div className='background-photo' />

            <div className='welcome-section'>
                <div className='welcome'>Welcome to The Musician</div>
                <div className='utilities'>
                    <div className='utilities-element-container'>
                        <div className='stream-icon' />
                        <div className='utilities-element'>Unlimited stream</div>
                    </div>
                    <div className='utilities-element-container'>
                        <div className='buy-icon' />
                        <div className='utilities-element'>Support the artist</div>
                    </div>
                </div>

                <div>
                    <div className='latest'>Latest from The Musician</div>
                    <div className='latest-songs-list'>
                        <div className='emmanho1-photo' />
                        <div className='emmanho2-photo' />
                        <div className='emmanho3-photo' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;