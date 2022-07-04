import { useState, useEffect } from 'react';
import styles from '../styles/Joke.module.scss';

const Joke = (props) => {
  const [devil, setDevil] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDevil(true);
    }, 5000);

    setTimeout(() => {
      props.setPage(2);
    }, 7000);
  }, []);
  return (
    <div className={`${styles.Joke} container`}>
      <h1>Oh vaya...</h1>
      <h2>Parece que en realidad no iba a pasar nada 😆</h2>
      <p>Tanta espera por nada</p>
      <p>O sí pasará algo? 🤔</p>
      <div
        className={`${
          devil ? styles.devil_container : styles.devil_deactivated
        }`}
      >
        <span>😈</span>
      </div>
    </div>
  );
};

export default Joke;
