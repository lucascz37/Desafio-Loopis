import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import WarningModal from '../../utils/WarningModal';
import Astronauta from '../../assets/astronauta.svg';
import './styles.css';
import Card from '../../utils/Card';

export default function () {
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem('data')) || [],
  );

  const [sentEmail, SetSentEmail] = useState(false);
  const [errorEmail, SetErrorEmail] = useState(false);
  const [displayDraw, SetDisplayDraw] = useState(false);
  const [drawResult, SetDrawResult] = useState('');
  const history = useHistory();

  function handleRegister() {
    history.push('/register');
  }

  function handleDelete(name) {
    const newValue = cards.filter(
      (user) => user.name !== name,
    );
    setCards(newValue);
    localStorage.setItem('data', JSON.stringify(newValue));
  }

  async function handleDrawn() {
    let sendMail = true;
    const max = cards.length;
    const choosed = [];

    const drawn = cards.map((user) => {
      let randomUser = Math.floor(Math.random() * max);
      sendMail = user.email.includes('@');
      while (cards[randomUser].name === user.name && !choosed.includes(randomUser)) {
        randomUser = Math.floor(Math.random() * max);
      }
      choosed.push(randomUser);
      return { name: user.name, amigo: cards[randomUser].name, email: user.email };
    });

    if (sendMail) {
      await api.post('/', { data: drawn });
      SetSentEmail(true);
    } else {
      SetDrawResult(drawn);
      SetDisplayDraw(true);
    }
  }

  return (
    <div className="main-container">
      <h1>AMIGO SECRETO LOOPIS</h1>
      {cards.length < 3 && cards.length > 0 ? (
        <p>OBS: o amigo secreto só pode ocorrer com no mínimo 3 pessoas.</p>
      ) : (
        <></>
      )}
      <ul className="user-container">
        {cards.length > 0 ? (
          cards.map((user) => (
            <li key={user.name} className="user">
              <Card
                name={user.name}
                email={user.email}
                onDelete={handleDelete}
              />
            </li>
          ))
        ) : (
          <li className="image-container">
            <img src={Astronauta} alt="Astrounata" className="logo-img" />
            <p>Nenhum participante adicionado.</p>
          </li>
        )}
      </ul>

      {cards.length >= 3 ? (
        <div className="register">
          <button onClick={handleRegister} type="button" className="register-button">
            ADICIONAR
          </button>
          <button onClick={handleDrawn} className="register-button" type="button">SORTEAR</button>
        </div>
      ) : (
        <div className="register">
          <button className="register-button" onClick={handleRegister} type="button">
            ADICIONAR
          </button>
        </div>
      )}
      <WarningModal
        open={displayDraw}
        setOpen={SetDisplayDraw}
        text="Sorteio realizado com sucesso!"
        list={drawResult}
      />
      <WarningModal
        open={sentEmail}
        setOpen={SetSentEmail}
        text="Sorteiro realizado com sucesso!"
        subtext="Os participantes serão notificados por email."
      />
      <WarningModal
        open={errorEmail}
        setOpen={SetErrorEmail}
        text="Sorteiro realizado com sucesso!"
        subtext="Os participantes serão notificados por email."
      />
    </div>
  );
}
