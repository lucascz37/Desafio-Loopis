import React, { useState } from 'react';
import {useHistory,useLocation} from 'react-router-dom';
import './styles.css';
export default function(){

    const history = useHistory();
    const location = useLocation();
    const [editName,setEditName] = useState(checkValue(true));
    const [editEmail,setEditEmail] = useState(checkValue(false));

    function checkValue(type){
      if(location.user === undefined){  
        history.push('/');                  //Checa se valores foi passado e retorna nome se type == true 
      }else{                                //email se type == false
        return type? location.user.name: location.user.email;
      }
    }
    
    function changeUser(){
      history.push('/');
    }

    return(
    <div className='edit-container'> 
        <h1>AMIGO SECRETO LOOPIS</h1>
        <strong>Nome</strong>
        <input value={editName} onChange={e => setEditName(e.target.value)}></input>
        <strong>Email</strong>
        <input value={editEmail} onChange={e => setEditEmail(e.target.value)}></input>
        <button onClick={changeUser} className='small-text-button'>SALVAR</button>
    </div>)
}