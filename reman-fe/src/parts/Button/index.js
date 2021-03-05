import React from 'react';
import propTypes from 'prop-types';
import './index.css';
// import { Link } from 'react-router-dom';

export default function index(props) {
  if (props.btnForLogin) {
    return (
      <button type="submit" className="btn-login">
        {props.children}
      </button>
    );
  }

  if (props.btnProfile) {
    return (
      <div className={['card-btn-save-settings', props.className].join(' ')}>
        <button type="submit" className="btn-save-settings">
          {props.children}
        </button>
      </div>
    );
  }

  // if(props.type === '')

  return <div></div>;
}

index.propTypes = {
  type: propTypes.string,
  className: propTypes.string,
  href: propTypes.string,
};
