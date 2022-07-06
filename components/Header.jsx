import Image from 'next/image';

//Styles
import styles from '../styles/header.module.scss';

//Assets
import Header_cake from '../assets/header_cake.gif';

const Header = () => {
  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.header__container} container`}>
        <h1>12 días cohetáneos</h1>
        <div className={styles.header__cake_container}>
          <Image src={Header_cake} alt='Cake' />
        </div>
      </div>
    </div>
  );
};

export default Header;
