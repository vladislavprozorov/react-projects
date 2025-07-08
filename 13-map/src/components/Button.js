import { useState } from 'react';
function Button({ onClick, text }) {
  const [initialStyle, setNewStyle] = useState('');
  const changeButton = () => {
    onClick();
    setNewStyle('green-btn');
  };
  return (
    <button className={initialStyle} onClick={changeButton}>
      {text}
    </button>
  );
}
export default Button;
