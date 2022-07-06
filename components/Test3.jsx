import { useState } from 'react';
import Image from 'next/image';

//Hooks
import useRandomMessage from '../hooks/useRandomMessage';
import { useInputValue } from '../hooks/useInputValue';

//Styles
import styles from '../styles/Test3.module.scss';

//Components
import Header from './Header';

//Assets
import codigo_2 from '../assets/codigo_2.png';
import javi_intercambio from '../assets/javi_intercambio.jpg';

const Test3 = (props) => {
  const [answered, setAnswered] = useState(false);
  const { random, setRandomMessage } = useRandomMessage();

  const ANSWER = useInputValue('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const LOWERCASE_ANSWER = ANSWER.value.toLowerCase();
    if (LOWERCASE_ANSWER === 'sombrilla') {
      setAnswered(true);
    }
    if (LOWERCASE_ANSWER !== 'sombrilla') {
      setRandomMessage();
    }
  };
  return (
    <>
      <Header />
      <div className={`${styles.test3}`}>
        <div className={`${styles.test3__container} container`}>
          {answered ? (
            <>
              <h2>Correctísimo</h2>
              <div className={styles.test3__javi_intercambio}>
                <Image src={javi_intercambio} alt='javi_intercambio' />
              </div>
              <p>
                Y para rellenar espacio y que esto dure más, aquí te va el texto
                que a ti, hace un año, entregado fue (y que probablemente
                volverás a perder 🙃):
              </p>

              <div className='text_container'>
                <p>¿Pero... a caso fue todo un sueño?</p>
                <p>
                  ¿Qué ha sido de todos esos pasillos grises y algo
                  laberínticos? O aquellas canchas con ese césped siempre tan
                  bien recortado. También recuerdo una pared llena de…gekos?
                  …Ese auditorio donde tantos exámenes hicimos, ¿todavía se verá
                  igual? ¿Y todos esos salones por los que tantas generaciones
                  pasaron y seguirán pasando? ¿Y mi propia generación? ¿En qué
                  momento se desvanecieron todos aquellos con los que gracias al
                  azar coincidí? Recuerdo todos esos rostros. Todas esas
                  emociones. Esos olores. Todas esas horas en aquel recinto
                  viendo las pizarras verdes empolvadas por el yeso. Todos esos
                  profesores, cada uno de los cuales a su manera muy particular,
                  se esforzaron (algunos más que otros) por forjar una
                  generación culta. De no haber sido por ellos, de seguro ahora
                  me harían falta los conocimientos adecuados para redactar
                  estas palabras. Estoy seguro que todo esto sí pasó, pues si no
                  hubiese pasado, no cuento con otros recuerdos para rellenar el
                  espacio de tiempo entre mi infancia y temprana juventud.
                </p>

                <p>
                  Es que lo recuerdo todo. Pero todo es solo eso, recuerdos… Ese
                  lugar y ese momento que alguna vez fueron lo cotidiano, ahora
                  solo viven en mis pensamientos y alguna que otra foto, pero
                  sin darme cuenta, se me escurrió entre las manos. Es difícil
                  establecer el porqué de mis palabras y del tono utilizado. No
                  se si lo extraño. No se si la emoción predominante entre todas
                  las que se manifiestan en mí es la melancolía, o más bien es
                  indiferencia. No entiendo si lo que echo en falta son aquellos
                  buenos momentos. Más bien creo que es otra cosa. Es inquietud.
                  Inquietud de no poder volver. De no poder volver a vivir algo
                  que una vez asumí como garantizado. Me pone intranquilo saber
                  que no hay fuerza o poder humano ni suma monetaria que haga
                  posible una vez más esa combinación exacta de elementos que
                  alguna vez existió en Antiguo Cuscatlán.
                </p>

                <p>
                  En realidad, hay algo que revierte toda esta situación. Algo
                  parecido a un antídoto, el cuál no ha sido mentado aún. Es más
                  bien un &#34;alguien&#34; y no un &#34;algo&#34;. Entre la
                  maraña de elementos mencionados al inicio, él también estuvo
                  ahí. En todas y cada una de ellas. Recorrió esos pasillos,
                  algunas veces incluso junto a mí. Recibió ovaciones dedicadas
                  a él por alguna que otra hazaña que realizó al jugar en
                  aquellas canchas. Fue coautor de alguno de aquellos gekos. Una
                  vez le llamaron la atención por accidentalmente presionar el
                  botón de aquel lapicero musical mío. Sí, eso ocurrió en ese
                  auditorio. Durante varios años compartimos salones con él,
                  pues perteneció a mi generación. Él no se escurrió entre mis
                  manos como el resto, pues sorprendentemente sigue ahí a día de
                  hoy. En circunstancias distintas, pero sigue ahí. No solamente
                  representa para mí una conexión a aquellas emociones y
                  sensaciones, pues a través de los años hemos seguido creando
                  experiencias en común. De alguna manera, y a pesar del espacio
                  entre nosotros, él sigue ahí. Javi, compartir todas esas
                  memorias contigo es la confirmación de que nada fue un sueño.
                  Más bien todo lo contrario, pues gracias a todos aquellos
                  sucesos somos quienes somos ahora. Gracias a todos esos
                  sucesos, seguimos siendo muy buenos amigos, cosa que me hace
                  muy feliz.
                </p>

                <p>
                  Prueba de ello es esta carta, física y no digital. Escrita a
                  mano. Entregada al cartero del siglo 21 personalmente en su
                  escritorio, quien (prácticamente) me asegura que esto llegará
                  a tus manos. Me asegura que un día volverás a casa, con algo
                  de suerte antes de tu cumpleaños, y revisarás tu buzón de
                  correos (insisto, FISICOS y no digitales, que es la
                  confirmación tangible y palpable de que aquí estamos!). Al
                  abrir la cajuela repararás en que hay una carta para ti. Acto
                  seguido revisarás su remitente y en tu mente se dibujará el
                  rostro del redactor de esta carta. Éste sonríe mientras te
                  mira a los ojos. Murmura alguna pequeña broma que nos remite a
                  ámbos al pasado, de esas que nunca se pierden con el pasar del
                  tiempo, ahogadas entre las nuevas memorias construidas. Luego
                  se dirige a ti, dándote un abrazo mientras alegremente te dice
                  &#34;¡Feliz cumpleaños, Javi!&#34;
                </p>

                <p>
                  Con cariño
                  <br />
                  Neto -c (cíclope triste)
                </p>

                <p>Postdata, los pasillos han dejado de ser grises…</p>
              </div>
              <button
                className='btn btn--blue'
                onClick={() => {
                  props.setPage(5);
                }}
              >
                Siguiente
              </button>
            </>
          ) : (
            <>
              <h2>Tercera prueba</h2>

              <div>
                <Image src={codigo_2} alt='codigo_2' />
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

export default Test3;
