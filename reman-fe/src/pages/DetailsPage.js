import React from 'react';
import Aux from '../components/Aux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DetailsContent from '../components/DetailsContent';

const DetailsPage = ({ login, setLogin }) => {
  return (
    <div>
      <Navbar login={login} />
      <Aux>
        <DetailsContent setLogin={setLogin} />
        <Footer />
      </Aux>
    </div>
  );
};

export default DetailsPage;
