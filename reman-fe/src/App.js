import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import Profile from './pages/ProfilePage';
import Details from './pages/DetailsPage';
import Aux from 'components/Aux';
import Home from './pages/Home';
import Spinners from './parts/Animation/Spinners';

function App() {
  const [login, setLogin] = useState(false);
  const [animation, setAnimation] = useState(true);
  const [modal, setModal] = useState(false);
  const [failModal, setFailModal] = useState(false);

  console.log('rhoka');
  return (
    <>
      <Router>
        <Route exact path="/">
          <Home login={login} />
        </Route>
        <Route exact path="/aux" component={Aux} />
        <Route exact path="/register">
          <Register animation={animation} setAnimation={setAnimation} />
        </Route>
        <Route exact path="/login">
          <Login
            failModal={failModal}
            setFailModal={setFailModal}
            setLogin={setLogin}
            animation={animation}
            setAnimation={setAnimation}
            login={login}
            modal={modal}
            setModal={setModal}
          />
        </Route>
        <Route exact path="/profile">
          <Profile login={login} setLogin={setLogin} />
        </Route>
        <Route exact path="/details">
          <Details setLogin={setLogin} login={login} />
        </Route>
        <Route exact path="/spinners" component={Spinners} />
      </Router>
    </>
  );
}

export default App;
