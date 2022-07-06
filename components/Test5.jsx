//Styles
import styles from '../styles/Test5.module.scss';

import { useState } from 'react';
import Image from 'next/image';

//Hooks
import useRandomMessage from '../hooks/useRandomMessage';
import { useInputValue } from '../hooks/useInputValue';

//Components
import Header from './Header';

//Assets
import codigo_4 from '../assets/codigo_4.png';
import javi_yo_bochum from '../assets/javi_yo_bochum.jpg';

const Test5 = () => {
  const [answered, setAnswered] = useState(false);
  const { random, setRandomMessage } = useRandomMessage();

  const ANSWER = useInputValue('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const right_answer = 'rufo';
    const LOWERCASE_ANSWER = ANSWER.value.toLowerCase();
    if (LOWERCASE_ANSWER === right_answer) {
      setAnswered(true);
    }
    if (LOWERCASE_ANSWER !== right_answer) {
      setRandomMessage();
    }
  };

  return (
    <>
      <Header />
      <div className={`${styles.test5}`}>
        <div className={`${styles.test5__container} container`}>
          {answered ? (
            <>
              <h2>
                . . . O, tal vez, y solo tal vez, un Fifi y un Rufo sí que
                pueden coexistir...
              </h2>
              <div>
                <Image src={javi_yo_bochum} alt='Javi y yo Bochum' />
              </div>
              <p className={styles.test5__solved_p}>
                . . . ¡Por más momentos así! 🍻
              </p>
              <h1 className={styles.test5__feliz_cumple}>
                Felix cumpleaños :)
              </h1>
            </>
          ) : (
            <>
              <h2>Quinta prueba</h2>
              <div>
                <Image src={codigo_4} alt='Código 4' />
              </div>
              <form
                action=''
                autoComplete='off'
                method='POST'
                className='answer_container'
                onSubmit={handleSubmit}
              >
                <h4>Respuesta: </h4>
                <input
                  name='answer'
                  id='answer'
                  autoComplete='off'
                  required
                  type='text'
                  value={ANSWER.value}
                  onChange={ANSWER.onChange}
                />
                <button type='submit' className='btn btn--red'>
                  Venís vos vea ...
                </button>
                <p className='error_displayer'>{random}</p>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Test5;
