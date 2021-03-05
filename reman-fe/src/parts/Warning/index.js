import React from 'react';
import './index.css';

export default function index(props) {
  if (props.warningPassword) {
    return <p className="title-warning">password minimal 6 digit</p>;
  }
  return <p className="title-warning">username minimal 3 digit</p>;
}
