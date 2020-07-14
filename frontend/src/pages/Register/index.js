import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './styles.css';

export default function(){
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function handleRegister(redirect){
      let users = JSON.parse(localStorage.getItem('data'));

      if(users === null){
        localStorage.setItem('data', JSON.stringify([{name: name, email: email}]));
      }else{
        users.push({name: name, email: email})
        localStorage.setItem('data', JSON.stringify(users));
      }


      redirect?history.push('/'):setName(''); setEmail('');
    }

    return(
    <div className='info-container'>
        <h1>AMIGO SECRETO LOOPIS</h1>
        <strong>Nome</strong>
        <input value={name} onChange={e => setName(e.target.value)}></input>
        <strong>Email</strong>
        <input value={email} onChange={e => setEmail(e.target.value)}></input>
        <button onClick={e => handleRegister(true)} className='small-text-button'>CADASTRAR</button>
        <button onClick={e => handleRegister(false)} className="large-text-button">CADASTRAR E ADICIONAR OUTRO</button>
    </div>)
}