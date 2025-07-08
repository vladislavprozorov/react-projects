function Person({ firstName, lastName, email, img }) {
  return (
    <div className="card">
      <h2>
        {firstName}
        {lastName}
      </h2>
      <h3>{email}</h3>
      <img src={img}></img>
    </div>
  );
}
export default Person;
