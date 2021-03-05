import React, { useState } from 'react';
import './index.css';
export default function Index(props) {
  const [modalPopUp, setModalPopUp] = useState(true);

  const handleModal = e => {
    setModalPopUp(false);
    e.preventDefault();
  };

  if (props.modalFailed) {
    return modalPopUp ? (
      <div className="container-modal-failed">
        <div className="wrapper-modal-failed">
          <p className="title-modal-failed">
            UserName atau password salah
            <button className="btn-modal-failed" onClick={handleModal}>
              X
            </button>
          </p>
        </div>
      </div>
    ) : (
      ''
    );
  }

  return modalPopUp ? (
    <div className="container-modal">
      <div className="wrapper-modal">
        <p className="title-modal">
          Login Telah Berhasil
          <button className="btn-modal" onClick={handleModal}>
            X
          </button>
        </p>
      </div>
    </div>
  ) : (
    ''
  );
}
