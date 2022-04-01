import React, { useState } from 'react';

import { Link } from 'react-router-dom';


import PlaylistHeader from '../PlaylistHeader';
import Header from '../../../../Components/Header/index,';
import SideNavigation from '../../../../Components/SideNavigation';

import './albums.css';


function Albums() {

    const [page, setPage] = useState('albums');

    const [navigation, setNavigation] = useState('playlist')

    return (
        <>
            <Header />

            <SideNavigation navigation={navigation} />
            <div>
                <PlaylistHeader page={page} />

                <div id="albums-list">

                    <Link to='/Playlist-album' className="album-card-container">
                        <div className="album-card">
                            <div className="album-photo" />
                            <div className="album-title">
                                Au fond - Single
                            </div>
                            <div className="album-price">
                                $9.99
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </>
    );
}

export default Albums;