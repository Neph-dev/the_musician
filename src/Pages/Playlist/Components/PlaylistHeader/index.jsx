import React from 'react';
import { Link } from 'react-router-dom';

import './playlistHeader.css';


function PlaylistHeader({ page }) {
    return (
        <div className="playlist-header-container">
            <div className={page === "songs" ? "album-songs-container-songs" : "album-songs-container"}>
                <Link to="/Playlist-songs" className="album-songs">
                    Songs
                </Link>
                <div style={{ width: 2, height: 30, backgroundColor: '#fff' }} />
                <Link to="/Playlist-albums" className="album-songs">
                    Albums
                </Link>
            </div>
        </div >
    );
}

export default PlaylistHeader;