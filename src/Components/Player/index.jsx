import React, { useState } from 'react';

import './player.css';


function Player() {

    const [play, setPlay] = useState(false)

    const seekTo = () => { }

    return (
        <section id='player'>
            <div className='player-song-photo' />
            <div className='player-song-title'>Au fond.</div>
            <div className='player-artist-name'>Emmanho</div>

            <div class="slider_container">
                <input type="range" min="1" max="100"
                    value="0" className="seek_slider" onChange={seekTo()} />
                <div class="slider_time_container">
                    <div class="current-time">00:00</div>
                    <div class="total-duration">00:00</div>
                </div>
            </div>
            <div>
                <div class="slider_container">
                    <input type="range" min="1" max="100"
                        value="88" class="volume_slider" onchange="setVolume()" />
                    <i class="fa fa-volume-up"></i>
                </div>
            </div>

            <div className="btn_container">
                {
                    play === true ? (
                        <div className="pause_play_btns" onClick={() => setPlay((prevState) => !prevState)}>
                            <div className='pause_btn' />
                            <div style={{ width: 5 }} />
                            <div className='pause_btn' />
                        </div>
                    ) :
                        <div className='play_btn' onClick={() => setPlay((prevState) => !prevState)} />
                }
            </div>


        </section>
    );
}

export default Player;