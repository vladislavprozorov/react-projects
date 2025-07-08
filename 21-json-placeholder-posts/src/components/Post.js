function Post(props) {
  const { title, userId, body } = props;
  return (
    <div className="post">
      <h1>{title}</h1>;<h2>{userId}</h2>
      <p>{body}</p>
    </div>
  );
}
export default Post;
