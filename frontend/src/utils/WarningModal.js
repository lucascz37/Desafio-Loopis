/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
import React from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import './warningModal.css';

export default function WarningModal({
  open,
  setOpen,
  text,
  subtext,
  list,
  redirect,
}) {
  const history = useHistory();
  function handleClose() {
    setOpen(false);
    if (redirect) {
      history.push('/');
    }
  }
  return (
    <Modal
      isOpen={open}
      className="warning-container"
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
      }}
    >
      <div>
        <h2>AMIGO SECRETO LOOPIS</h2>
        <p>{text}</p>

        {subtext ? <small>{subtext}</small> : <></>}

        {list ? (
          <ul>
            {list.map((user) => (
              <li key={user.name}>
                {user.name}-{user.amigo}
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}

        <button onClick={handleClose} type="button">
          OK
        </button>
      </div>
    </Modal>
  );
}
