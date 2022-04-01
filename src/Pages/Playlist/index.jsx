import React, { useState } from 'react';

import './playlist.css';


function Playlist() {

    const [songs, setSongs] = useState(true)

    return (
        <>
            <div className="playlist-container">
                <div className="album-songs-container">
                    <div
                        className="album-songs"
                        onClick={() => setSongs(true)}>
                        Songs
                    </div>
                    <div style={{ width: 2, height: 30, backgroundColor: '#fff' }} />
                    <div
                        className="album-songs"
                        onClick={() => setSongs((prevState) => !prevState)}>
                        Albums
                    </div>
                </div>

            </div>
        </>
    );
}

export default Playlist;