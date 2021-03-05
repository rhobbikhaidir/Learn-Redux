import React from 'react';
import Navbar from '../components/Navbar';
import Login from '../components/Login';
import Aux from '../components/Aux';
import Footer from '../components/Footer';
import Modal from '../parts/Modal';

export default function LoginPage({
  login,
  setLogin,
  animation,
  setAnimation,
  modal,
  setModal,
  failModal,
  setFailModal,
}) {
  console.log(login);
  // console.log(setModal);
  console.log(modal);
  setTimeout(() => {
    setModal(false);
    setFailModal(false);
  }, 8000);
  return (
    <div>
      <Navbar />
      <Aux style={{ height: 720 }}>
        <div style={{ height: 60, marginTop: 60 }}>
          {failModal ? <Modal modalFailed /> : ''}
          {modal ? <Modal /> : ''}
        </div>
        <Login
          setFailModal={setFailModal}
          setModal={setModal}
          setLogin={setLogin}
          animation={animation}
          setAnimation={setAnimation}
        />
        <Footer />
      </Aux>
    </div>
  );
}
