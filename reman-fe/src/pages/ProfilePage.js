import React from 'react';
import Navbar from '../components/Navbar';
import Aux from '../components/Aux';
import Profile from '../components/Profile';
import Footer from '../components/Footer/index';

export default function ProfilePage({ login }) {
  console.log(login);
  return (
    <div>
      <Navbar login={login} />
      <Aux>
        <Profile />
        <Footer />
      </Aux>
    </div>
  );
}
