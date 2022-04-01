/*
  Using react-router-dom@v5  
  Declare and set the exact path to every page component.
*/

import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom';
import Album from '../Pages/Album';

//import the pages.
import Home from '../Pages/Home';
import Playlist from '../Pages/Playlist';
import Albums from '../Pages/Playlist/Components/Albums';
import Songs from '../Pages/Playlist/Components/Songs';


export default function Router() {
  return (
    <Routers>
      <Switch>           
          <Route exact path='/' component={Home} />
          <Route exact path='/Playlist' component={Playlist} />
          <Route exact path='/Playlist-songs' component={Songs} />
          <Route exact path='/Playlist-albums' component={Albums} />
          <Route exact path='/Playlist-album' component={Album} />
      </Switch>
    </Routers>
  )
}