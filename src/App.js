import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { auth } from './auth/firebase';
//
import { fonts } from './constants/Fonts';
//
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
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
import SecurityDashboard from './pages/SecurityDashboard';

//styled-components
const Root = styled.div`
  height: 100%;
  min-height: 100vh;
  min-width: 100vw;
  width: 100%;
  font-family: ${fonts.archivo};
`;

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.id,
        email: userAuth?.email,
      };
      if (userAuth) {
        console.log(userAuth);
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <AuthProvider>
      <Root className='App'>
        <Router>
          <Navbar user={user} />

          {!user ? (
            <Route path='/'>
              <HomePage />
            </Route>
          ) : (
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
              <Route path='/security'>
                <SecurityDashboard />
              </Route>
              <Route path='/'>
                {user ? <Redirect to='/dashboard' /> : <HomePage />}
              </Route>
            </Switch>
          )}
        </Router>
      </Root>
    </AuthProvider>
  );
}

export default App;
