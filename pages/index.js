import { useState } from 'react';

import Head from 'next/head';

//Componentes
import Timer from '../components/Timer';
import Joke from '../components/Joke';
import Test1 from '../components/Test1';
import Test2 from '../components/Test2';
import Test3 from '../components/Test3';
import Test4 from '../components/Test4';
import Test5 from '../components/Test5';

export default function Home() {
  //TODO: set state to 0
  const [page, setPage] = useState(0);
  return (
    <>
      <Head>
        <title>El evento...</title>
        <meta name='el evento' content='Evento relacionado con Javi' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {page === 0 && <Timer setPage={setPage} />}
        {page === 1 && <Joke setPage={setPage} />}
        {page === 2 && <Test1 setPage={setPage} />}
        {page === 3 && <Test2 setPage={setPage} />}
        {page === 4 && <Test3 setPage={setPage} />}
        {page === 5 && <Test4 setPage={setPage} />}
        {page === 6 && <Test5 setPage={setPage} />}
      </main>
    </>
  );
}
