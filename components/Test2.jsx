import { useState } from 'react';
import Image from 'next/image';

//Styles
import styles from '../styles/Test2.module.scss';

//Components
import Header from './Header';

//Hooks
import useRandomMessage from '../hooks/useRandomMessage';
import { useInputValue } from '../hooks/useInputValue';

//Assets
import Playa_roatan from '../assets/roatan.jpg';
import Cuchito from '../assets/Cuchito.png';

const Test2 = (props) => {
  const [answered, setAnswered] = useState(false);
  const { random, setRandomMessage } = useRandomMessage();

  const ANSWER = useInputValue('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const right_answer = '2016-08-16';
    if (ANSWER.value === right_answer) {
      setAnswered(true);
      console.log('Yaay');
    }
    if (ANSWER.value !== right_answer) {
      setRandomMessage();
    }
  };

  return (
    <>
      <Header />
      <div className={`${styles.test2}`}>
        <div className={`${styles.test2__container} container`}>
          {answered ? (
            <>
              <h2>Cabalmente</h2>
              <p>
                Fue probablemente el mismo día en que Cuchito casi estira la
                pata :&#40;
              </p>
              <div>
                <Image src={Cuchito} alt='Cuchito' />
              </div>
              <button
                className='btn btn--blue'
                onClick={() => {
                  props.setPage(4);
                }}
              >
                Siguiente
              </button>
            </>
          ) : (
            <>
              <h2>Segunda prueba</h2>
              <div>
                <Image src={Playa_roatan} alt='Playa_roatan' />
              </div>
              <p>
                Vos que sos psicólogo, ¿En qué fecha exacta se tomó esta foto?
              </p>
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
                  type='date'
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

export default Test2;
