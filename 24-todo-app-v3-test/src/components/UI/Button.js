import React from 'react';
import styles from './Button.module.css';
const Button = (props) => {
  const { onClick, disabled = false, title, children } = props;
  return (
    <button
      className={styles.button}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
