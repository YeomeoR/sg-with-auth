import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';


//nav
import Nav from './components/Nav';
// Global style
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';

import Services2 from './pages/Services2';
import Projects from './pages/Projects';
import OurClients from './pages/OurClients';

import Footer from './components/Footer';

// auth
import PrivateRoute from './components/PrivateRoute';
import './auth.css';
import SignUp from './components/SignUp';
import Docs from './pages/Docs';
import LogIn from './components/LogIn';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const location = useLocation();

  return (
    <>
      <div className="App">
        <GlobalStyle />
        <Nav />
        <Switch location={location} key={location.pathname}>
         
          <Route exact path="/">
            <AboutUs />
          </Route>
          <Route exact path="/squaregain">
            <AboutUs />
          </Route>
         
          <Route exact path="/services2">
            <Services2 />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route path="/clients" exact>
            <OurClients />
          </Route>
          {/* this route needs to go to the login page */}
          <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: '100vh' }}
          >
            <div className="w-100" style={{ maxWidth: '400px' }}>
              <Router>
                <AuthProvider>
                  {/* <Switch> */}
                    {/* This route is the route to the docs */}
                    <PrivateRoute exact path="/docs" component={Docs} />
                    <PrivateRoute
                      exact
                      path="/update-profile"
                      component={UpdateProfile}
                    />
                    <Route path="/signup" component={SignUp} />
                    {/* this is the route to the login */}
                    <Route path="/login" component={LogIn} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                  {/* </Switch> */}
                </AuthProvider>
              </Router>
            </div>
          </Container>
        </Switch>

        <Footer />
      </div>
    </>
  );
}

export default App;

