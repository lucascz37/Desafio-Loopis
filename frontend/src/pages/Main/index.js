import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Astronauta from '../../assets/astronauta.svg';
import './styles.css';
import Card from '../../utils/Card';

export default function(){
    const [cards, setCards] = useState(JSON.parse(localStorage.getItem('data')) || []);
    const history = useHistory();

    function handleRegister(){
      history.push('/register');
    }

    function handleDelete(name, email){
      let newValue = cards.filter( user => user.name !== name && user.email !== email )
      setCards(newValue);
      localStorage.setItem('data', JSON.stringify(newValue));
    }

    return(<div className='main-container'>
      <h1>AMIGO SECRETO LOOPIS</h1>
      {cards.length < 3 && cards.length > 0?<p>OBS: o amigo secreto só pode ocorrer com no mínimo 3 pessoas.</p>:<></>}
      <ul className='user-container'>
        {cards.length > 0 ? cards.map( user =>
           (<li key={user.name} className='user'>
             <Card name = {user.name} email = {user.email} onDelete={handleDelete}/>
             </li>))
           :<li className='image-container'>
              <img src={Astronauta} alt='Astrounata' className='logo-img'/>
              <p>Nenhum participante adicionado.</p>
            </li> }
      </ul>

      {cards.length >=3 ? 
        <div className='register'>
          <button  onClick={handleRegister} className='register-button'>ADICIONAR</button>
          <button className='register-button'>SORTEAR</button>
        </div>:
        <div className='register'>
          <button className='register-button' onClick={handleRegister}>ADICIONAR</button>
        </div>}
    </div>)
}