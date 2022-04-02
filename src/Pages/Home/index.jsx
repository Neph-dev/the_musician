import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './home.css';

import Header from '../../Components/Header/index,';
import SideNavigation from '../../Components/SideNavigation';

import AlbumData from '../../Data/Album';


function Home() {

    const [navigation, setNavigation] = useState('home')

    return (
        <>
            <Header />

            <SideNavigation navigation={navigation} />

            <div className='home-container'>

                <div className='background-photo' />

                <div className='welcome-section'>
                    <div className='welcome'>Welcome to The Musician</div>
                    <div className='utilities'>
                        <div className='utilities-element-container'>
                            <div className='stream-icon' />
                            <div className='utilities-element'>Unlimited streaming</div>
                        </div>
                        <div className='utilities-element-container'>
                            <div className='buy-icon' />
                            <div className='utilities-element'>Support the artist</div>
                        </div>
                    </div>

                    <div>
                        <div className='latest'>Latest from The Musician</div>
                        <div className='latest-songs-list'>
                            {
                                AlbumData.map((item) => (
                                    <div key={item.id}>
                                        <Link
                                            to={{ pathname: '/Playlist-album', state: item }}
                                            title={item.title}>
                                            <img src={item.album_cover} alt="Logo" className='home-album-photo' />
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;