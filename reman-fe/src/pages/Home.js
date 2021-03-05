import React from 'react';
import Navbar from '../components/Navbar';
import Aux from '../components/Aux';
import Content from '../components/Content';
import Footer from '../components/Footer';

function Home({ login, setLogin }) {
  console.log(login);
  return (
    <div>
      <Navbar login={login} setLogin={setLogin} />
      {/* Taruh NewEvents di bungkus div  ini */}
      <Aux style={{ marginRight: 31, height: 'auto' }}>
        <Content />
        <Footer />
      </Aux>
    </div>
  );
}

export default Home;
