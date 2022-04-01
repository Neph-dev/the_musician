import React, { useState } from 'react';
import PlaylistHeader from '../PlaylistHeader';

import './albums.css';


function Albums() {

    const [page, setPage] = useState('albums');

    return (
        <div>
            <PlaylistHeader page={page} />

            <div id="albums-list">

                <a href='/Playlist-album' className="album-card-container">
                    <div className="album-card">
                        <div className="album-photo" />
                        <div className="album-title">
                            Au fond - Single
                        </div>
                        <div className="album-price">
                            $9.99
                        </div>
                    </div>
                </a>

            </div>
        </div>
    );
}

export default Albums;