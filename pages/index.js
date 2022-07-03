import { useState } from 'react';

import Head from 'next/head';

//Componentes
import Login from '../components/Login';
import Timer from '../components/Timer';

export default function Home() {
  const [page, setPage] = useState(0);
  return (
    <div className>
      <Head>
        <title>El evento...</title>
        <meta name='el evento' content='Evento relacionado con Javi' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div>
          {page === 0 && <Timer setPage={setPage} />}
          {/* Página de era paja jejeje */}
          {page === 1 && <Login setPage={setPage} />}
        </div>
      </main>
    </div>
  );
}
