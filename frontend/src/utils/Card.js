import React from 'react';
import {FaPen, FaTrash} from 'react-icons/fa';
import {useHistory} from 'react-router-dom';
import './card.css';

export default function Card({name, email, onDelete}){
    const history = useHistory(); 

    function handleEdit(){
        history.push({
            pathname:'/edit',
            user:{name: name, email: email} //parâmetros acessiveis atraves do useLocation
        });                                         
    }

    return(
        <div className='card'>
            <div className='info'>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
            <div className='icons'> 
                <button onClick={handleEdit} className='edit' ><FaPen/></button>
                <button onClick={() => onDelete(name, email)} className='delete'><FaTrash/></button>
            </div>
        </div>
    )
}