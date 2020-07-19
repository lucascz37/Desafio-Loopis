/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import Modal from 'react-modal';
import './dialogModal.css';

export default function DialogModal({ open, setOpen, name, AcceptFunction }) {
  return (
    <Modal
      isOpen={open}
      className="dialog-container"
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
      }}
    >
      <div>
        <h2>AMIGO SECRETO LOOPIS</h2>
        <p>
          Deseja realmente excluir <strong>{name}</strong> ?
        </p>
        <div className="button-container">
          <button onClick={AcceptFunction} type="button" className="accept">
            SIM
          </button>
          <button onClick={() => setOpen(false)} type="button">
            CANCELAR
          </button>
        </div>
      </div>
    </Modal>
  );
}
