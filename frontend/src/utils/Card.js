import React, { useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import DialogModal from './DialogModal';
import './card.css';

// eslint-disable-next-line react/prop-types
export default function Card({ name, email, onDelete }) {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  function handleEdit() {
    history.push({
      pathname: '/edit',
      user: { name, email }, // parâmetros acessiveis atraves do useLocation
    });
  }

  function handleDelete() {
    setOpen(true);
  }

  return (
    <div className="card">
      <div className="info">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
      <div className="icons">
        <button onClick={handleEdit} className="edit" type="button">
          <FaPen />
        </button>
        <button onClick={handleDelete} className="delete" type="button">
          <FaTrash />
        </button>
      </div>
      <DialogModal
        open={open}
        setOpen={setOpen}
        name={name}
        AcceptFunction={() => onDelete(name)}
      />
    </div>
  );
}
