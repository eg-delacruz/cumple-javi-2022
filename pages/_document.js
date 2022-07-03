//Aquí manejamos el SEO de la página de manera global

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='es'>
      <Head>
        <meta charSet='utf-8' />

        {/* No se que son */}
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />

        {/* Font1 */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap'
          rel='stylesheet'
        />
        {/* Font2 */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;0,700;1,400&display=swap'
          rel='stylesheet'
        />

        {/* Improves loading performance by loading google fonts parallel to wp load */}
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />

        {/* makes browser color match website */}
        <meta name='theme-color' content='#ffffff' />
      </Head>

      <body>
        {/* Es necesario poner el main y NextScript para que la app funcione bien */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
