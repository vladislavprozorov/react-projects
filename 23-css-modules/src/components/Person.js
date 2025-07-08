import { useState } from 'react';
import styles from './Person.module.css';
function Person() {
  const [username, setUserName] = useState('unknown');
  const changeName = () => {
    setUserName('Vladislav');
  };
  return (
    <div className={styles.person}>
      <h1 className={styles.headtitle}>Name is {username}</h1>
      <button className={styles.personBtn} onClick={changeName}>
        Click to know my name!
      </button>
    </div>
  );
}
export default Person;
