import './App.css';


import {
  BrowserRouter as Routers
} from 'react-router-dom';

import Header from './Components/Header/index,';
import SideNavigation from './Components/SideNavigation';
import Router from './Router/Router';

function App() {
  return (
    <div className="App">
            <Header/>
            <Routers>
              <SideNavigation />
            </Routers>
            <Router />
        </div>
  );
}

export default App;
