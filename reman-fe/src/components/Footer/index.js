import React from 'react';
import FooterInstagram from '../../assets/image/instagram.svg';
import FooterYoutube from '../../assets/image/youtube.svg';
import FooterFacebook from '../../assets/image/facebook.svg';
import './index.css';

export default function index() {
  return (
    <footer className="container-footer">
      <div>
        <div className="card-img-footer" style={{ textAlign: 'center' }}>
          <button className="btn-img-footer">
            <a
              href="https://www.instagram.com/_mediareman/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="sosmed-footer"
                src={FooterInstagram}
                alt="Logo-instagram"
              />
            </a>
          </button>
          <button className="btn-img-footer">
            <a
              href="https://youtube.com/channel/UC1yjX5RxGJuJ46ctFegLMJA"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="sosmed-footer"
                src={FooterYoutube}
                alt="Logo-instagram"
              />
            </a>
          </button>
          <button className="btn-img-footer">
            <a href="/">
              <img
                className="sosmed-footer"
                src={FooterFacebook}
                alt="Logo-instagram"
                rel="noreferrer"
              />
            </a>
          </button>
        </div>
        <p className="footer-text">
          CopyRights &copy; 2021 CreativeSquadPro. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
