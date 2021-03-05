import React from 'react';
import Navbar from '../components/Navbar';
import Register from '../components/Register';
import Aux from '../components/Aux';
import Footer from '../components/Footer';

export default function RegisterPage({ animation, setAnimation }) {
  return (
    <div>
      <Navbar />
      <Aux>
        <Register animation={animation} setAnimation={setAnimation} />
        <Footer />
      </Aux>
    </div>
  );
}
