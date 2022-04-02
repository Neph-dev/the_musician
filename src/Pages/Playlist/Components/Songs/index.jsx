import React, { useState } from 'react';

import Player from '../../../../Components/Player';
import Header from '../../../../Components/Header/index,';
import SideNavigation from '../../../../Components/SideNavigation';
import PlaylistHeader from '../PlaylistHeader';

import AlbumData from '../../../../Data/Album';

import './songs.css';


function Songs() {

    const [page, setPage] = useState('songs');

    const [navigation, setNavigation] = useState('playlist')

    return (
        <>
            <Header />

            <SideNavigation navigation={navigation} />
            <div>
                <PlaylistHeader page={page} />

                <div display="flex">
                    <Player />
                    <section id="songs-list">
                        <div className="suffle">
                            <div>Suffle</div>
                            <div className="suffle-icon" />
                        </div>

                        <ol>
                            {
                                AlbumData.map(item => (
                                    <div className="song" key={item.id}>
                                        <li>
                                            <div className="song-title-name">
                                                <img src={item.album_cover} alt='' className="song-list-photo" />
                                                <div style={{ marginLeft: 10 }}>
                                                    <div className="song-title">{item.songs[0].title}</div>
                                                    <div className="song-artist-name">{item.songs[0].artist_1}</div>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <div className="song-time">2:48</div>
                                                <div className="song-price">Buy for {item.songs[0].price}</div>
                                            </div>
                                        </li>
                                    </div>
                                ))
                            }
                        </ol>
                    </section>

                </div>
            </div>
        </>
    );
}

export default Songs;