import { useState, useRef, useEffect } from 'react';
import styles from '../styles/Timer.module.scss';

const Timer = (props) => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();
  const startTimer = () => {
    const CountdownDate = new Date('July 19 2022 00:00:00').getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      //This is given in milliseconds
      const distance = CountdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        props.setPage(1);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(interval);
  });

  return (
    <>
      <section className={styles.timer}>
        <section className={styles.timer__container}>
          <div>
            <span className={styles.timer__icon}>⏱️</span>
            <h1>Ya casi casi...</h1>
            <p>
              No es lo mismo decir `Se avecina una tormenta` que `La vecina se
              atormenta` (10/10)
            </p>
            <p>O será otra cosa la que se avecina? 🤔 </p>
          </div>

          <div>
            <section>
              <p>{timerDays}</p>
              <p>
                <small>Días</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <p>
                <small>Horas</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <p>
                <small>Minutos</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <p>
                <small>Segundos</small>
              </p>
            </section>
          </div>
        </section>
      </section>
    </>
  );
};

export default Timer;
