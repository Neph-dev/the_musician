import React from 'react';

import './playlistHeader.css';


function PlaylistHeader({ page }) {
    return (
        <div className="playlist-header-container">
            <div className={page === "songs" ? "album-songs-container-songs" : "album-songs-container"}>
                <a href="/Playlist-songs" className="album-songs">
                    Songs
                </a>
                <div style={{ width: 2, height: 30, backgroundColor: '#fff' }} />
                <a href="/Playlist-albums" className="album-songs">
                    Albums
                </a>
            </div>
        </div >
    );
}

export default PlaylistHeader;