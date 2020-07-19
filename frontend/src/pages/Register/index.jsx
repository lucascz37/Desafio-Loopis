import React, { useState } from 'react';
import WarningModal from '../../utils/WarningModal';
import './styles.css';

export default function () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);

  function handleRegister(e) {
    const users = JSON.parse(localStorage.getItem('data'));

    if (users === null) {
      localStorage.setItem(
        'data',
        JSON.stringify([{ name, email }]),
      );
    } else {
      users.push({ name, email });
      localStorage.setItem('data', JSON.stringify(users));
    }

    setOpen(true);
    setRedirect(e);
    setEmail('');
    setName('');
  }

  return (
    <div className="info-container">
      <h1>AMIGO SECRETO LOOPIS</h1>
      <strong>Nome</strong>
      <input value={name} type="text" maxLength="23" onChange={(e) => setName(e.target.value)} />
      <strong>Email</strong>
      <input value={email} type="email" maxLength="38" onChange={(e) => setEmail(e.target.value)} />
      <button
        onClick={() => handleRegister(true)}
        className="small-text-button"
        type="button"
      >
        CADASTRAR
      </button>
      <button
        onClick={() => handleRegister(false)}
        className="large-text-button"
        type="button"
      >
        CADASTRAR E ADICIONAR OUTRO
      </button>
      <WarningModal open={open} setOpen={setOpen} text="Cadastrado com sucesso!" redirect={redirect} />
    </div>
  );
}
