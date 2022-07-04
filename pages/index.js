import { useState } from 'react';

import Head from 'next/head';

//Componentes
import Login from '../components/Login';
import Joke from '../components/Joke';
import Timer from '../components/Timer';

export default function Home() {
  //TODO: set state to 0
  const [page, setPage] = useState(1);
  return (
    <div className>
      <Head>
        <title>El evento...</title>
        <meta name='el evento' content='Evento relacionado con Javi' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div>
          {/* TODO: Uncomment first page before uploading */}
          {/* {page === 0 && <Timer setPage={setPage} />} */}
          {page === 1 && <Joke setPage={setPage} />}
          {page === 2 && <Login setPage={setPage} />}
        </div>
      </main>
    </div>
  );
}
