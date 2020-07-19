import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import WarningModal from '../../utils/WarningModal';
import './styles.css';

export default function () {
  const history = useHistory();
  const location = useLocation();

  function checkValue(type) {
    if (location.user === undefined) { // checa se os valores foram passados no estado
      history.push('/');
      return null;
    }
    // retorna nome se true e email se false
    return type ? location.user.name : location.user.email;
  }

  const [editName, setEditName] = useState(checkValue(true));
  const [editEmail, setEditEmail] = useState(checkValue(false));
  const [open, setOpen] = useState(false);

  function changeUser() {
    let users = JSON.parse(localStorage.getItem('data'));
    users = users.map((user) => {
      if (user.name === location.user.name && user.email === location.user.email) {
        return { name: editName, email: editEmail };
      }
      return user;
    });
    localStorage.setItem('data', JSON.stringify(users));
    setOpen(true);
  }

  return (
    <div className="edit-container">
      <h1>AMIGO SECRETO LOOPIS</h1>
      <strong>Nome</strong>
      <input
        type="text"
        maxLength="23"
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
      />
      <strong>Email</strong>
      <input
        type="email"
        maxLength="38"
        value={editEmail}
        onChange={(e) => setEditEmail(e.target.value)}
      />
      <button onClick={changeUser} className="small-text-button" type="button">
        SALVAR
      </button>
      <WarningModal
        open={open}
        setOpen={setOpen}
        text="Salvo com sucesso!"
        redirect
      />
    </div>
  );
}
