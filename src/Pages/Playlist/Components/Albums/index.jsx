import React, { useState } from 'react';

import { Link } from 'react-router-dom';


import PlaylistHeader from '../PlaylistHeader';
import Header from '../../../../Components/Header/index,';
import SideNavigation from '../../../../Components/SideNavigation';

import AlbumData from '../../../../Data/Album';

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

                    {
                        AlbumData.map((item) => (
                            <Link
                                to={{ pathname: '/Playlist-album', state: item }}
                                key={item.id}
                                className="album-card-container" >
                                <div className="album-card">
                                    <img src={item.album_cover} alt='' className="album-photo" />
                                    <div className="album-title">
                                        {item.title} - {item.album_type}
                                    </div>
                                    <div className="album-price">
                                        {item.price}
                                    </div>
                                </div>
                            </Link>
                        ))
                    }

                </div>
            </div>
        </>
    );
}

export default Albums;