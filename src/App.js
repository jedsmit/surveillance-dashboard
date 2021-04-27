import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import styled from 'styled-components';

// import { useAuthstate } from 'react-firebase-hooks';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import TableGamesDashboard from './pages/TableGamesDashboard';
import BlackjackDashboard from './pages/BlackjackDashboard';
import BaccaratDashboard from './pages/BaccaratDashboard';
import RouletteDashboard from './pages/RouletteDashboard';
import ContactsPage from './pages/ContactsPage';
import GcaKioskPage from './pages/GcaKioskPage';
import CageDashboard from './pages/CageDashboard';
import SlotsDashboard from './pages/SlotsDashboard';
import CrapsDashboard from './pages/CrapsDashboard';
import TilesDashboard from './pages/TilesDashboard';
import PaiGowDashboard from './pages/PaiGowDashboard';
import ThreeCardPokerDashboard from './pages/ThreeCardPokerDashboard';
import FourCardPokerDashboard from './pages/FourCardPokerDashboard';
import UTHoldemDashboard from './pages/UTHoldemDashboard';
import CasinoWarDashboard from './pages/CasinoWarDashboard';

//styled-components
const Root = styled.div`
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    <Root className='App'>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/dashboard'>
            <DashboardPage />
          </Route>
          <Route path='/tablegames'>
            <TableGamesDashboard />
          </Route>
          <Route path='/blackjack'>
            <BlackjackDashboard />
          </Route>
          <Route path='/baccarat'>
            <BaccaratDashboard />
          </Route>
          <Route path='/roulette'>
            <RouletteDashboard />
          </Route>
          <Route path='/craps'>
            <CrapsDashboard />
          </Route>
          <Route path='/paigow'>
            <PaiGowDashboard />
          </Route>
          <Route path='/tiles'>
            <TilesDashboard />
          </Route>
          <Route path='/threecardpoker'>
            <ThreeCardPokerDashboard />
          </Route>
          <Route path='/fourcardpoker'>
            <FourCardPokerDashboard />
          </Route>
          <Route path='/utholdem'>
            <UTHoldemDashboard />
          </Route>
          <Route path='/casinowar'>
            <CasinoWarDashboard />
          </Route>
          <Route path='/contacts'>
            <ContactsPage />
          </Route>
          <Route path='/gca-kiosks'>
            <GcaKioskPage />
          </Route>
          <Route path='/cage'>
            <CageDashboard />
          </Route>
          <Route path='/slots'>
            <SlotsDashboard />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Root>
  );
}

export default App;
