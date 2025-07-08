import { useState } from 'react';
function Login() {
  const [data, setData] = useState({ username: '', password: '' });
  function handleFormInput(event) {
    event.preventDefault();
    console.log(data);
    alert(JSON.stringify(data));
  }
  function handleInput(e, name) {
    setData({ ...data, [name]: e.target.value });
  }
  return (
    <>
      <form onSubmit={handleFormInput}>
        <label>
          username:
          <input
            value={data.username}
            onChange={(e) => handleInput(e, 'username')}
          ></input>
        </label>
        <label>
          password:
          <input
            value={data.password}
            onChange={(e) => handleInput(e, 'password')}
          ></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
export default Login;
