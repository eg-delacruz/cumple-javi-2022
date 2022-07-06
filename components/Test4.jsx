import { useState } from 'react';
import Image from 'next/image';

//Hooks
import useRandomMessage from '../hooks/useRandomMessage';
import { useInputValue } from '../hooks/useInputValue';

//Styles
import styles from '../styles/Test4.module.scss';

//Components
import Header from './Header';

//Assets
import codigo_3 from '../assets/codigo_3.png';

const Test4 = (props) => {
  const [answered, setAnswered] = useState(false);
  const { random, setRandomMessage } = useRandomMessage();

  const ANSWER = useInputValue('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const right_answer = 'si mi testimonio he de dar';
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
      <div className={`${styles.test4}`}>
        <div className={`${styles.test4__container} container`}>
          {answered ? (
            <>
              <h2>¡Eso mismísimo!</h2>
              <p>
                Y en ese momento, Javi se agarró los &#34;güevitos&#34; y dijo:
              </p>
              <div className={styles.test4__audio}>
                <audio loop controls src='./primer_valiente.mp3'>
                  Dale
                </audio>
              </div>
              <button
                className='btn btn--blue'
                onClick={() => {
                  props.setPage(6);
                }}
              >
                Siguiente
              </button>
            </>
          ) : (
            <>
              <h2>Cuarta prueba</h2>
              <div>
                <Image src={codigo_3} alt='codigo_3' />
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
                <p>(6 palabras)</p>
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

export default Test4;
