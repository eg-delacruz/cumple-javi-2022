import { useState } from 'react';

const useRandomMessage = () => {
  const mensajes = {
    1: 'Pues...no',
    2: 'Je, je, je, je...',
    3: 'Perdedoor 😆',
    4: 'Josueeeeee, Josué, Josuee',
    5: 'Sorry bro...',
    6: 'En serio?... Esperé más de vos...',
    7: 'Pudín?',
    8: 'Etooo... no?',
    9: 'Rendite mejor...',
    10: 'Nel...',
    11: 'Nope...',
    12: 'Maletón...',
  };

  const [random, setRandom] = useState('');

  function setRandomNumber(min, max) {
    var result;
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
  }

  function setRandomMessage() {
    setRandom(mensajes[setRandomNumber(1, 11)]);
  }

  return { random, setRandomMessage };
};

export default useRandomMessage;
