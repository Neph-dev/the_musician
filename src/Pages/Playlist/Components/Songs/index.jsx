import React, { useState } from 'react';

import PlaylistHeader from '../PlaylistHeader';

import './songs.css';


function Songs() {

    const [page, setPage] = useState('songs');

    return (
        <div>
            <PlaylistHeader page={page} />

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
                                    <div className="song-title">Emmanho</div>
                                    <div className="song-artist-name">Au fond.</div>
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
    );
}

export default Songs;