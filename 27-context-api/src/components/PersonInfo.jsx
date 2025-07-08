import UserContext from '../context/UserContext';
import { useContext } from 'react';
const PersonInfo = () => {
  const user = useContext(UserContext);
  return <h1>{user.user}</h1>;
};

export default PersonInfo;
