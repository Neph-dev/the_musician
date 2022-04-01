import React from 'react';

import './sideNavigation.css';

import { Link } from 'react-router-dom'


function SideNavigation() {
    return (
        <div className='sideNavigation-container'>
            <a href='/' className='sideNavigation-element-container-focused'>
                <div className='home-icon' />
                <div className='sideNavigation-element'>Home</div>
            </a>
            <a href='/Playlist-songs' className='sideNavigation-element-container'>
                <div className='playlist-icon' />
                <div className='sideNavigation-element'>Playlist</div>
            </a>
            <div className='sideNavigation-element-container'>
                <div className='about-icon' />
                <div className='sideNavigation-element'>About</div>
            </div>
        </div>
    );
}

export default SideNavigation;