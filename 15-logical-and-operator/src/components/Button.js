import { useState } from 'react';
function Button({ onClick }) {
  const [initialButton, setButtonStyle] = useState('Click me!');
  const [initialStyle, setNewStyle] = useState('');
  const changeButton = () => {
    onClick();
    setButtonStyle('Fuck me!');
    setNewStyle('green-btn')
  };
  return <button className={initialStyle} onClick={changeButton}>{initialButton}</button>;
}
export default Button;
