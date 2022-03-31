import React from 'react';

import './sideNavigation.css';


function SideNavigation(props) {
    return (
        <div className='sideNavigation-container'>
            <div className='sideNavigation-element-container-focused'>
                <div className='home-icon' />
                <div className='sideNavigation-element'>Home</div>
            </div>
            <div className='sideNavigation-element-container'>
                <div className='playlist-icon' />
                <div className='sideNavigation-element'>Playlist</div>
            </div>
            <div className='sideNavigation-element-container'>
                <div className='about-icon' />
                <div className='sideNavigation-element'>About</div>
            </div>
        </div>
    );
}

export default SideNavigation;