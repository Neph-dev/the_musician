import React from 'react';

import './sideNavigation.css';

import { Link } from 'react-router-dom';


function SideNavigation({ navigation }) {
    return (
        <div className='sideNavigation-container'>
            <Link to='/'
                className={
                    navigation === 'home'
                        ? 'sideNavigation-element-container-focused'
                        : 'sideNavigation-element-container'}>
                <div className='home-icon' />
                <div className='sideNavigation-element'>Home</div>
            </Link>
            <Link to='/Playlist-songs'
                className={
                    navigation === 'playlist'
                        ? 'sideNavigation-element-container-focused'
                        : 'sideNavigation-element-container'}>
                <div className='playlist-icon' />
                <div className='sideNavigation-element'>Playlist</div>
            </Link>
            <div
                className={
                    navigation === 'about'
                        ? 'sideNavigation-element-container-focused'
                        : 'sideNavigation-element-container'}>
                <div className='about-icon' />
                <div className='sideNavigation-element'>About</div>
            </div>
        </div>
    );
}

export default SideNavigation;