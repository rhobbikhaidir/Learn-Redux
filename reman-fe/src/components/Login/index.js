import './index.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Button from '../../parts/Button';
import Input from '../../parts/Input';
import Spinners from '../../parts/Animation/Spinners';

function Login({ setLogin, animation, setAnimation, setModal, setFailModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleClick = event => {
    setAnimation(false);
    axios
      .post(
        'https://sureface-natours.herokuapp.com/api/v1/users/login',
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then(res => {
        setLogin(true);
        setModal(true);
        setEmail('');
        setPassword('');
        console.log(res);
        console.log(res.cookies);
        const cookies = new Cookies();
        cookies.set('jwt', res.data.token, { path: '/' });
        console.log(cookies.get('jwt'));
        setTimeout(() => {
          history.push('/');
        }, 2000);
      })
      .catch(e => {
        // console.log(`error password salah ${e}`);
        console.log(e.response.data);
        if (e.response.status === 401) {
          setFailModal(true);
          setAnimation(true);
        }
      });

    event.preventDefault();
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleUsername = event => {
    setEmail(event.target.value);
  };
  return (
    <section className="wrapper-login">
      <div className="container-login">
        {animation ? (
          <div className="card-login">
            <h1 className="title-login">log into your account!</h1>
            <form onSubmit={handleClick}>
              <Input
                onChange={handleUsername}
                value={email}
                placeholder="you@example.com"
                inputEmailName
                title="Email Adress"
              />
              <Input
                onChange={handlePassword}
                value={password}
                title="Password"
                inputPassword
              />
              {password.length >= 6 && email.length >= 2 ? (
                <Button btnForLogin>Login</Button>
              ) : (
                ''
              )}
            </form>
          </div>
        ) : (
          <div className="card-login">
            <Spinners></Spinners>
          </div>
        )}
      </div>
    </section>
  );
}

export default Login;
