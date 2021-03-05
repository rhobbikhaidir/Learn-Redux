import React from 'react';
import './index.css';
export default function index(props) {
  return (
    <div className="container-aux" style={props.style}>
      {props.children}
    </div>
  );
}
