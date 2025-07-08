import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
const myObj = {
  name: 'Vladislav',
  age: 21,
  newObj: {
    name: 'Vl',
  },
};
const myCopyObj = JSON.parse(JSON.stringify(myObj));
console.log(myCopyObj);
console.log(myObj === myCopyObj);
const PersonChange = () => {
  const [text, setText] = useState('');
  const { user, setUser } = useContext(UserContext);
  const submitHandlerForm = (e) => {
    e.preventDefault();
    setText('');
  };
  return (
    <form onSubmit={submitHandlerForm}>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Input your name"
      ></input>
      <button
        type="submit"
        onClick={() =>
          setUser(user === text ? 'This user has been maked' : text)
        }
      >
        Change name
      </button>
    </form>
  );
};

export default PersonChange;
