import React, { useState } from 'react';

import Player from '../../../../Components/Player';
import Header from '../../../../Components/Header/index,';
import SideNavigation from '../../../../Components/SideNavigation';
import PlaylistHeader from '../PlaylistHeader';

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
                            <div className="song">
                                <li>
                                    <div className="song-title-name">
                                        <div className="song-list-photo" />
                                        <div style={{ marginLeft: 10 }}>
                                            <div className="song-title">Au fond.</div>
                                            <div className="song-artist-name">Emmanho</div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <div className="song-time">2:48</div>
                                        <div className="song-price">Buy for $1.99</div>
                                    </div>
                                </li>
                            </div>
                        </ol>
                    </section>

                </div>
            </div>
        </>
    );
}

export default Songs;