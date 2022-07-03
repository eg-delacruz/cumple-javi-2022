import React from 'react';

//Hooks
import useRandomMessage from '../hooks/useRandomMessage';

const Login = (props) => {
  const { random, setRandomMessage } = useRandomMessage();
  return (
    <>
      <h1>H1 Almost before we knew it, we had left the grou</h1>
      <h2>H2 Almost before we knew it, we had left the grou</h2>
      <h3>H3 Almost before we knew it, we had left the grou</h3>
      <h4>H4 Almost before we knew it, we had left the grou</h4>
      <br />
      <br />
      <br />
      <br />
      <p>Almost before we knew it, we had left the grou</p>
      <button className='btn btn--blue' onClick={setRandomMessage}>
        Login
      </button>
      <p>{random}</p>
      <button
        className='btn btn--blue'
        onClick={() => {
          props.setPage(1);
        }}
      >
        Cambiar página
      </button>
    </>
  );
};

export default Login;
