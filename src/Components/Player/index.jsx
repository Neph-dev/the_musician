import React from 'react';

import './player.css';


function Player() {
    return (
        <section id='player'>
            <div className='player-song-photo' />
            <div className='player-song-title'>Au fond.</div>
            <div className='player-artist-name'>Emmanho</div>
        </section>
    );
}

export default Player;