import './App.css';
import Header from './Components/Header/index,';
import SideNavigation from './Components/SideNavigation';
import Router from './Router/Router';

function App() {
  return (
    <div className="App">
      <Header/>
      <SideNavigation />
      <Router />
    </div>
  );
}

export default App;
