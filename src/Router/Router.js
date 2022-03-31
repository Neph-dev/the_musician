/*
  Using react-router-dom@v5  
  Declare and set the exact path to every page component.
*/

import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom';

//import the pages.
import Home from '../Pages/Home';
import Playlist from '../Pages/Playlist';


export default function Router() {
  return (
    <Routers>
      <Switch>           
          <Route exact path='/' component={Home} />
          <Route exact path='/Playlist' component={Playlist} />
      </Switch>
    </Routers>
  )
}