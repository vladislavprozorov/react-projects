import './Info.css';
import styles from './Info.module.css';
console.log(styles);
function Info() {
  return (
    <div className={styles.info}>
      <h1>Info from Info Component</h1>
      <h2>HELLO</h2>
      <button className={styles.myOtherButton}>Click Me!</button>
    </div>
  );
}
export default Info;
