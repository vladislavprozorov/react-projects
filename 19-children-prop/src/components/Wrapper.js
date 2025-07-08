function Wrapper(props) {
  console.log(props);
  const style = {
    backgroundColor: props.color,
    width: '250px',
    margin: '25px auto',
    padding: '25px',
  };
  return <div style={style}>{props.children}</div>;
}
export default Wrapper;
