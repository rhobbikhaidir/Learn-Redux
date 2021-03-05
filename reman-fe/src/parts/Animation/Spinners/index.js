import React from 'react';
import './index.css';

export default function index(props) {
  return (
    <div className="wrapper-spinner-animation">
      {/* Loading Spinner */}
      <h1 className="title-animation">Wait a second</h1>
      <div className="loading-spinner"></div>
      {props.children}
    </div>
  );
}
