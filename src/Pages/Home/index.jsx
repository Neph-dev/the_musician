import React from 'react';
import SideNavigation from '../../Components/SideNavigation';

import './home.css';


function Home(props) {
    return (
        <div className='home-container'>
            <div className='home-logo'>Royal Music</div>
            <div className='login'>login</div>

            <div className='background-photo' />

            <SideNavigation />

            <div className='welcome-section'>
                <div className='welcome'>Welcome to Royal Music</div>
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
                    <div className='latest'>Latest from Royal Music</div>
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