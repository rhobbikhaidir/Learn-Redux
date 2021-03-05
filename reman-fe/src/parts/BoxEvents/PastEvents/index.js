import React from 'react';
import { Link } from 'react-router-dom';

const PastEvents = props => {
  return (
    <div>
      <div className="box_1_content">
        <div className="foto_acara">
          <img className="foto__edit" src={props.foto} alt="Foto Acara" />
          <div className="gradient_red"></div>
          <img className="icon" src={props.icon} alt="icon" />
        </div>
        <h3 className="title_acara">{props.judul}</h3>
        <p className="descripsi_acara">{props.descripsi}</p>
        <ul className="point_point_acara">
          <li className="point_1">{props.point1}</li>
          <li className="point_2">{props.point2}</li>
        </ul>
        <Link to="/details">
          <button className="btn_content">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default PastEvents;
