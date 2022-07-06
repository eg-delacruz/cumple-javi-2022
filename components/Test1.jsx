import Image from 'next/image';
import { useState } from 'react';

//Hooks
import useRandomMessage from '../hooks/useRandomMessage';
import { useInputValue } from '../hooks/useInputValue';

//Components
import Header from './Header';

//Styles
import styles from '../styles/Test1.module.scss';

//Assets
import codigo_1 from '../assets/codigo_1.png';

const Login = (props) => {
  const [answered, setAnswered] = useState(false);
  const { random, setRandomMessage } = useRandomMessage();

  const ANSWER = useInputValue('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const LOWERCASE_ANSWER = ANSWER.value.toLowerCase();
    if (LOWERCASE_ANSWER === 'amigo') {
      setAnswered(true);
    }
    if (LOWERCASE_ANSWER !== 'amigo') {
      setRandomMessage();
    }
  };
  return (
    <>
      <Header />
      <div className={`${styles.test1}`}>
        <div className={`${styles.test1__container} container`}>
          {answered ? (
            <>
              <h2>Cabalmente</h2>
              <button
                className='btn btn--blue'
                onClick={() => {
                  props.setPage(3);
                }}
              >
                Siguiente
              </button>
            </>
          ) : (
            <>
              <h2>Primera prueba</h2>
              <div className={styles.test1__codigo}>
                <Image src={codigo_1} alt='codigo_1' />
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

export default Login;
