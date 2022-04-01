import React from 'react';
import Header from '../../Components/Header/index,';
import SideNavigation from '../../Components/SideNavigation';

import './album.css';


function Album() {
    return (
        <div id='album-container'>
            <div style={{ width: '15rem', height: '100%' }}>
                <div className='album-cover' />
                <div className='sml-text'>1 Songs, 2 minutes</div>
                <div>
                    <div className='md-text'>Emmanho</div>
                    <div className='md-text'>Rumba • 2020</div>
                    <div className='buy-btn-container'>
                        <div className='buy-btn'>Buy $9.99</div>
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
    );
}

export default Album;