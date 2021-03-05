import React, { useEffect, useState } from 'react';
import Logo from '../../assets/image/reman-logo.png';
import Cookies from 'universal-cookie';
import axios from 'axios';
import './index.css';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import smiles from '../../assets/image/smiles.svg';

export default function Index({ login }) {
  const [me, setMe] = useState('');

  const cookies = new Cookies();
  const HandleLogout = e => {
    // const history = useHistory();
    cookies.set('jwt', '', { path: '/' });
    // console.log(cookies.get('jwt'));
    // history.push('/');
    // e.prevendDefault();
    console.log('logout di klik');
  };
  useEffect(() => {
    axios
      .get('https://sureface-natours.herokuapp.com/api/v1/users/me', {
        headers: {
          Authorization: `Bearer ${cookies.get('jwt')}`,
        },
        withCredentials: true,
      })
      .then(res => {
        const name = res.data.data.data;
        console.log(name);
        setMe(name);
      });
  }, []);
  return !login ? (
    <section>
      <header className="header">
        <nav className="nav nav--tours">
          <a href="/" className="title-nav-header">
            Reman.
          </a>
        </nav>
        <div className="header__logo">
          <img
            src={Logo}
            alt="logo"
            className="img-hero-header"
            onClick={() => alert('ngapain luh click!!!!')}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginRight: 20,
          }}
        >
          <nav className="nav wrapper-nav-header">
            <button className="button-login-nav-header ">
              <a href="/login" className="title-login-nav-header">
                Log in
              </a>
            </button>
          </nav>
          <nav>
            <button className="button-signup-nav-header">
              <a
                href="/register"
                className="title-signup-nav-header"
                // style={{ float: 'right' }}
              >
                Sign up
              </a>
            </button>
          </nav>
        </div>
      </header>
    </section>
  ) : (
    <section>
      <header className="header">
        <nav className="nav nav--tours">
          <a href="/" className="title-nav-header">
            Reman.
          </a>
        </nav>
        <div className="header__logo">
          <img
            src={Logo}
            alt="logo"
            className="img-hero-header"
            onClick={() => alert('ngapain luh click!!!!')}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginRight: 20,
          }}
        >
          <nav className="nav wrapper-nav-header">
            <button className="button-login-nav-header" onClick={HandleLogout}>
              <a className="title-login-nav-header">Log out</a>
            </button>
          </nav>
          <nav>
            <button className="button-login-nav-header">
              <img
                src={smiles}
                alt="foto-profile"
                className="img-foto-profile-navbar"
              />
              <p className="title-login-nav-header">{me.name}</p>
            </button>
          </nav>
        </div>
      </header>
    </section>
  );
}
