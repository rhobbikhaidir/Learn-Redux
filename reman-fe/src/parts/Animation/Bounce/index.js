import React from 'react';
import './index.css';
export default function index() {
  return (
    <div className="wrapper-animation-bounce">
      <h1 className="title-animation-bounce">Wait a second...</h1>
      <div className="loading-dots">
        <div className="bounce"></div>
        <div className="bounce2"></div>
        <div className="bounce3"> </div>
      </div>
    </div>
  );
}
