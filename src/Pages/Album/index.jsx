import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';

import Header from '../../Components/Header/index,';
import Player from '../../Components/Player';
import SideNavigation from '../../Components/SideNavigation';
import PlaylistHeader from '../Playlist/Components/PlaylistHeader';

import './album.css';


function Album() {

    const location = useLocation()


    const [navigation, setNavigation] = useState('playlist')

    return (
        <>
            <Header />

            <SideNavigation navigation={navigation} />

            <div>

                <PlaylistHeader />

                <div>
                    <Player />

                    <div id='album-container'>

                        <div style={{ width: '15rem', height: '100%' }}>
                            <img src={location.state.album_cover} alt='' className='album-cover' />
                            <div className='sml-text'>1 Songs, 2 minutes</div>
                            <div>
                                <div className='md-text'>{location.state.artist_1}</div>
                                <div className='md-text'>{location.state.genre} • 2020</div>
                                <div className='buy-btn-container'>
                                    <div className='buy-btn'>Buy {location.state.price}</div>
                                </div>
                            </div>
                        </div>

                        <section className='album-song-list'>
                            <div className="suffle">
                                <div>Suffle</div>
                                <div className="suffle-icon" />
                            </div>

                            <ol>
                                <div className="song">
                                    <li>
                                        <div className="song-title-name">
                                            <div>
                                                <div className="song-title">{location.state.songs[0].title}</div>
                                                <div className="song-artist-name">{location.state.songs[0].artist_1}</div>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <div className="song-time">2:48</div>
                                            <div className="song-price">Buy for {location.state.songs[0].price}</div>
                                        </div>
                                    </li>
                                </div>
                            </ol>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Album;